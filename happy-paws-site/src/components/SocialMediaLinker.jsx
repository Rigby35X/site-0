/**
 * Social Media Linker Component
 * 
 * React component for managing social media account connections
 * Handles profile creation, account linking, and connection status
 */

import React, { useState, useEffect } from 'react';

const SocialMediaLinker = ({ 
  userId, 
  onConnectionUpdate,
  className = '',
  showTitle = true 
}) => {
  const [profileStatus, setProfileStatus] = useState({
    hasProfile: false,
    connectedNetworks: [],
    profileKey: null,
    loading: true,
    error: null
  });

  const [isCreatingProfile, setIsCreatingProfile] = useState(false);
  const [isGeneratingLink, setIsGeneratingLink] = useState(false);

  // Platform configurations
  const platforms = [
    { id: 'facebook', name: 'Facebook', icon: '📘', color: '#1877F2' },
    { id: 'instagram', name: 'Instagram', icon: '📷', color: '#E4405F' },
    { id: 'twitter', name: 'Twitter/X', icon: '🐦', color: '#1DA1F2' },
    { id: 'linkedin', name: 'LinkedIn', icon: '💼', color: '#0A66C2' },
    { id: 'youtube', name: 'YouTube', icon: '📺', color: '#FF0000' },
    { id: 'tiktok', name: 'TikTok', icon: '🎵', color: '#000000' },
    { id: 'pinterest', name: 'Pinterest', icon: '📌', color: '#BD081C' }
  ];

  // Load profile status on component mount
  useEffect(() => {
    if (userId) {
      loadProfileStatus();
    }
  }, [userId]);

  // Load user's social profile status
  const loadProfileStatus = async () => {
    try {
      setProfileStatus(prev => ({ ...prev, loading: true, error: null }));

      const response = await fetch(`/api/social/link?userId=${encodeURIComponent(userId)}`);
      const result = await response.json();

      if (result.success) {
        setProfileStatus({
          hasProfile: result.data.hasProfile,
          connectedNetworks: result.data.connectedNetworks || [],
          profileKey: result.data.profileKey,
          loading: false,
          error: null
        });

        // Notify parent component of connection status
        if (onConnectionUpdate) {
          onConnectionUpdate(result.data);
        }
      } else {
        throw new Error(result.error || 'Failed to load profile status');
      }
    } catch (error) {
      console.error('Error loading profile status:', error);
      setProfileStatus(prev => ({
        ...prev,
        loading: false,
        error: error.message
      }));
    }
  };

  // Create a new social media profile
  const createProfile = async () => {
    try {
      setIsCreatingProfile(true);

      const response = await fetch('/api/social/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          title: 'Barkhaus User Profile'
        })
      });

      const result = await response.json();

      if (result.success) {
        console.log('✅ Profile created successfully');
        await loadProfileStatus(); // Reload status
      } else {
        if (result.code === 'PROFILE_EXISTS') {
          // Profile already exists, just reload status
          await loadProfileStatus();
        } else {
          throw new Error(result.error || 'Failed to create profile');
        }
      }
    } catch (error) {
      console.error('Error creating profile:', error);
      setProfileStatus(prev => ({
        ...prev,
        error: error.message
      }));
    } finally {
      setIsCreatingProfile(false);
    }
  };

  // Generate linking URL and open it
  const linkSocialAccounts = async () => {
    try {
      setIsGeneratingLink(true);

      const response = await fetch('/api/social/link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          redirectUrl: `${window.location.origin}/admin/social-linked`
        })
      });

      const result = await response.json();

      if (result.success) {
        console.log('✅ Linking URL generated');
        
        // Open linking URL in a new window
        const linkingWindow = window.open(
          result.data.linkingUrl,
          'social-linking',
          'width=600,height=700,scrollbars=yes,resizable=yes'
        );

        // Listen for the window to close or redirect
        const checkClosed = setInterval(() => {
          if (linkingWindow.closed) {
            clearInterval(checkClosed);
            console.log('🔄 Linking window closed, refreshing status...');
            // Reload profile status after linking
            setTimeout(() => {
              loadProfileStatus();
            }, 2000); // Wait 2 seconds for webhook to process
          }
        }, 1000);

        // Also listen for messages from the linking window
        const handleMessage = (event) => {
          if (event.origin === window.location.origin && event.data.type === 'social-linked') {
            console.log('✅ Social account linked successfully');
            window.removeEventListener('message', handleMessage);
            linkingWindow.close();
            loadProfileStatus();
          }
        };
        window.addEventListener('message', handleMessage);

      } else {
        if (result.code === 'PROFILE_REQUIRED') {
          // Need to create profile first
          await createProfile();
          return;
        }
        throw new Error(result.error || 'Failed to generate linking URL');
      }
    } catch (error) {
      console.error('Error generating linking URL:', error);
      setProfileStatus(prev => ({
        ...prev,
        error: error.message
      }));
    } finally {
      setIsGeneratingLink(false);
    }
  };

  // Render loading state
  if (profileStatus.loading) {
    return (
      <div className={`social-media-linker ${className}`}>
        {showTitle && <h3>🔗 Social Media Connections</h3>}
        <div className="loading">
          <div className="spinner"></div>
          <span>Loading social media status...</span>
        </div>
      </div>
    );
  }

  // Render error state
  if (profileStatus.error) {
    return (
      <div className={`social-media-linker ${className}`}>
        {showTitle && <h3>🔗 Social Media Connections</h3>}
        <div className="error">
          <p>❌ Error: {profileStatus.error}</p>
          <button onClick={loadProfileStatus} className="retry-btn">
            🔄 Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`social-media-linker ${className}`}>
      {showTitle && <h3>🔗 Social Media Connections</h3>}
      
      {!profileStatus.hasProfile ? (
        // No profile exists - show create profile button
        <div className="no-profile">
          <p>📝 Create a social media profile to connect your accounts and start posting.</p>
          <button 
            onClick={createProfile}
            disabled={isCreatingProfile}
            className="create-profile-btn"
          >
            {isCreatingProfile ? '⏳ Creating Profile...' : '➕ Create Social Profile'}
          </button>
        </div>
      ) : (
        // Profile exists - show connection status and link button
        <div className="profile-exists">
          <div className="connection-status">
            <h4>📊 Connection Status</h4>
            <div className="platforms-grid">
              {platforms.map(platform => {
                const isConnected = profileStatus.connectedNetworks.includes(platform.id);
                return (
                  <div 
                    key={platform.id} 
                    className={`platform-status ${isConnected ? 'connected' : 'disconnected'}`}
                    style={{ borderColor: platform.color }}
                  >
                    <span className="platform-icon">{platform.icon}</span>
                    <span className="platform-name">{platform.name}</span>
                    <span className="status-indicator">
                      {isConnected ? '✅' : '⭕'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="actions">
            <button 
              onClick={linkSocialAccounts}
              disabled={isGeneratingLink}
              className="link-accounts-btn"
            >
              {isGeneratingLink ? '⏳ Generating Link...' : '🔗 Connect More Accounts'}
            </button>
            
            <button 
              onClick={loadProfileStatus}
              className="refresh-btn"
            >
              🔄 Refresh Status
            </button>
          </div>

          {profileStatus.connectedNetworks.length > 0 && (
            <div className="connected-summary">
              <p>
                ✅ Connected to {profileStatus.connectedNetworks.length} platform
                {profileStatus.connectedNetworks.length !== 1 ? 's' : ''}: {' '}
                <strong>{profileStatus.connectedNetworks.join(', ')}</strong>
              </p>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        .social-media-linker {
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          margin-bottom: 24px;
        }

        .social-media-linker h3 {
          margin: 0 0 20px 0;
          color: #04736b;
          font-size: 18px;
        }

        .loading, .error {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 20px;
          border-radius: 8px;
        }

        .loading {
          background: #f8fafc;
          color: #64748b;
        }

        .error {
          background: #fef2f2;
          color: #dc2626;
          flex-direction: column;
          align-items: flex-start;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid #e2e8f0;
          border-top: 2px solid #04736b;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .no-profile {
          text-align: center;
          padding: 20px;
        }

        .no-profile p {
          margin-bottom: 20px;
          color: #64748b;
        }

        .platforms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
          margin: 16px 0;
        }

        .platform-status {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          background: white;
        }

        .platform-status.connected {
          background: #f0fdf4;
          border-color: #16a34a;
        }

        .platform-status.disconnected {
          background: #fafafa;
          border-color: #e2e8f0;
        }

        .platform-icon {
          font-size: 18px;
        }

        .platform-name {
          flex: 1;
          font-weight: 500;
        }

        .status-indicator {
          font-size: 16px;
        }

        .actions {
          display: flex;
          gap: 12px;
          margin: 20px 0;
          flex-wrap: wrap;
        }

        .create-profile-btn,
        .link-accounts-btn,
        .refresh-btn,
        .retry-btn {
          padding: 12px 24px;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .create-profile-btn,
        .link-accounts-btn {
          background: #04736b;
          color: white;
        }

        .create-profile-btn:hover,
        .link-accounts-btn:hover {
          background: #132f2d;
        }

        .refresh-btn,
        .retry-btn {
          background: #f1f5f9;
          color: #475569;
          border: 1px solid #e2e8f0;
        }

        .refresh-btn:hover,
        .retry-btn:hover {
          background: #e2e8f0;
        }

        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .connected-summary {
          background: #f0fdf4;
          border: 1px solid #16a34a;
          border-radius: 8px;
          padding: 16px;
          margin-top: 16px;
        }

        .connected-summary p {
          margin: 0;
          color: #15803d;
        }

        .connection-status h4 {
          margin: 0 0 12px 0;
          color: #374151;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default SocialMediaLinker;
