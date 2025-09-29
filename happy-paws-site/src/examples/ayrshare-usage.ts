/**
 * Ayrshare Usage Examples for Barkhaus
 * 
 * This file demonstrates how to use the Ayrshare integration
 * for various social media marketing tasks.
 */

import {
  AyrshareService,
  publishPost,
  getAnalytics,
  addComment,
  sendMessage,
  createFacebookAd,
  publishMultiPlatformPost,
  schedulePost,
  createProfile,
  generateJWT,
  getProfileByKey
} from '../social/ayrshare';

// Initialize the service (optional - you can also use the helper functions)
const ayrshare = new AyrshareService();

/**
 * Multi-User Profile Management Examples
 */

/**
 * Example: Create Profile for New User
 */
export async function exampleCreateProfile(userId: string, userName: string) {
  try {
    console.log(`👤 Creating profile for user: ${userName} (${userId})`);

    const result = await createProfile(userId, `${userName} - Barkhaus Profile`);

    console.log('✅ Profile created:', result);
    return result;
  } catch (error) {
    console.error('❌ Error creating profile:', error);
    throw error;
  }
}

/**
 * Example: Generate Linking URL for User
 */
export async function exampleGenerateLinkingURL(profileKey: string, redirectUrl?: string) {
  try {
    console.log(`🔗 Generating linking URL for profile: ${profileKey}`);

    const result = await generateJWT(
      profileKey,
      redirectUrl || 'https://barkhaus.com/admin/social-linked'
    );

    console.log('✅ Linking URL generated:', result.url);
    return result;
  } catch (error) {
    console.error('❌ Error generating linking URL:', error);
    throw error;
  }
}

/**
 * Example: Complete User Onboarding Flow
 */
export async function exampleUserOnboarding(userId: string, userName: string) {
  try {
    console.log(`🚀 Starting onboarding for: ${userName}`);

    // Step 1: Create profile
    const profileResult = await exampleCreateProfile(userId, userName);
    const profileKey = profileResult.profileKey;

    // Step 2: Generate linking URL
    const linkingResult = await exampleGenerateLinkingURL(profileKey);

    console.log(`✅ Onboarding complete for ${userName}:`);
    console.log(`   Profile Key: ${profileKey}`);
    console.log(`   Linking URL: ${linkingResult.url}`);

    return {
      userId,
      userName,
      profileKey,
      linkingUrl: linkingResult.url
    };
  } catch (error) {
    console.error('❌ Error in user onboarding:', error);
    throw error;
  }
}

/**
 * Example 1: Simple Post Publishing (Multi-User)
 * Post the same content to multiple platforms using a specific user's profile
 */
export async function example1_SimplePost(profileKey?: string) {
  try {
    const result = await publishPost({
      text: "🚀 Check out our new Barkhaus launch! The future of animal rescue marketing automation is here. #Barkhaus #AnimalRescue #MarketingAutomation",
      platforms: ['twitter', 'instagram', 'linkedin'],
      mediaUrls: ['https://example.com/barkhaus-launch-image.jpg'],
      profileKey // Use specific user's connected accounts
    });

    console.log('✅ Post published:', result);
    return result;
  } catch (error) {
    console.error('❌ Error publishing post:', error);
    throw error;
  }
}

/**
 * Example: Multi-User Team Posting
 * Different team members posting with their own accounts
 */
export async function exampleTeamPosting() {
  try {
    console.log('👥 Starting team posting example...');

    // Simulate different team members
    const teamMembers = [
      {
        name: 'Sarah (Rescue Manager)',
        profileKey: 'profile_key_sarah',
        content: '🐕 Meet our newest rescue pups! These adorable babies are looking for their forever homes. #AdoptDontShop #RescueDogs'
      },
      {
        name: 'Mike (Volunteer Coordinator)',
        profileKey: 'profile_key_mike',
        content: '🙋‍♂️ Calling all volunteers! We need help at our adoption event this Saturday. Sign up to make a difference! #Volunteer #AnimalRescue'
      },
      {
        name: 'Emma (Social Media Manager)',
        profileKey: 'profile_key_emma',
        content: '📱 Follow us on all platforms for daily updates on our rescue animals and success stories! #SocialMedia #AnimalRescue'
      }
    ];

    const results = [];

    // Each team member posts with their own connected accounts
    for (const member of teamMembers) {
      console.log(`📤 ${member.name} posting...`);

      const result = await publishPost({
        text: member.content,
        platforms: ['twitter', 'instagram', 'facebook'],
        profileKey: member.profileKey
      });

      results.push({
        member: member.name,
        result
      });

      // Wait between posts to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    console.log('✅ Team posting complete:', results);
    return results;
  } catch (error) {
    console.error('❌ Error in team posting:', error);
    throw error;
  }
}

/**
 * Example 2: Platform-Specific Content
 * Different content for different platforms
 */
export async function example2_PlatformSpecificPost() {
  try {
    const results = await publishMultiPlatformPost({
      defaultText: "🚀 Check out our new Barkhaus launch!",
      platformSpecific: {
        twitter: "🚀 Excited to announce #Barkhaus - revolutionizing animal rescue marketing! 🐾 #AnimalRescue #MarketingTech",
        linkedin: "We're thrilled to introduce Barkhaus, our comprehensive marketing automation platform designed specifically for animal rescue organizations. This innovative solution helps rescues streamline their outreach, manage social media presence, and ultimately save more lives. #AnimalRescue #MarketingAutomation #SocialImpact",
        instagram: "🐾✨ Introducing Barkhaus! ✨🐾\n\nThe game-changing marketing platform for animal rescues is finally here! 🚀\n\n#Barkhaus #AnimalRescue #SaveLives #MarketingMagic"
      },
      mediaUrls: ['https://example.com/barkhaus-launch-image.jpg']
    });
    
    console.log('✅ Multi-platform posts published:', results);
    return results;
  } catch (error) {
    console.error('❌ Error publishing multi-platform posts:', error);
    throw error;
  }
}

/**
 * Example 3: Scheduled Posts
 * Schedule posts for optimal engagement times
 */
export async function example3_ScheduledPost() {
  try {
    // Schedule for tomorrow at 9 AM
    const scheduledDate = new Date();
    scheduledDate.setDate(scheduledDate.getDate() + 1);
    scheduledDate.setHours(9, 0, 0, 0);
    
    const result = await publishPost({
      text: "🎉 Don't miss our Barkhaus demo today at 3 PM! See how we're transforming animal rescue marketing. Register now! 🐕 #BarkhaushDemo #AnimalRescue",
      platforms: ['twitter', 'facebook', 'linkedin'],
      scheduleDate: schedulePost(scheduledDate)
    });
    
    console.log('✅ Scheduled post created:', result);
    return result;
  } catch (error) {
    console.error('❌ Error scheduling post:', error);
    throw error;
  }
}

/**
 * Example 4: Analytics Tracking (Multi-User)
 * Get performance metrics for your posts with user-specific data
 */
export async function example4_GetAnalytics(postId: string, profileKey?: string) {
  try {
    const analytics = await getAnalytics(postId, ['twitter', 'instagram', 'linkedin'], profileKey);

    console.log('📊 Post analytics:', analytics);

    // Process analytics data
    analytics.forEach(platformData => {
      console.log(`${platformData.platform} Performance:`, {
        impressions: platformData.impressions,
        engagements: platformData.engagements,
        clicks: platformData.clicks,
        likes: platformData.likes,
        shares: platformData.shares,
        comments: platformData.comments
      });
    });

    return analytics;
  } catch (error) {
    console.error('❌ Error fetching analytics:', error);
    throw error;
  }
}

/**
 * Example: Team Analytics Dashboard
 * Compare performance across different team members
 */
export async function exampleTeamAnalytics(postIds: string[]) {
  try {
    console.log('📊 Generating team analytics dashboard...');

    const teamMembers = [
      { name: 'Sarah (Rescue Manager)', profileKey: 'profile_key_sarah' },
      { name: 'Mike (Volunteer Coordinator)', profileKey: 'profile_key_mike' },
      { name: 'Emma (Social Media Manager)', profileKey: 'profile_key_emma' }
    ];

    const teamAnalytics = [];

    for (const member of teamMembers) {
      console.log(`📈 Getting analytics for ${member.name}...`);

      const memberAnalytics = [];

      for (const postId of postIds) {
        try {
          const analytics = await getAnalytics(postId, undefined, member.profileKey);
          memberAnalytics.push(...analytics);
        } catch (error) {
          console.error(`Error getting analytics for ${member.name}, post ${postId}:`, error);
        }
      }

      // Calculate totals for this member
      const totals = memberAnalytics.reduce((acc, data) => ({
        impressions: (acc.impressions || 0) + (data.impressions || 0),
        engagements: (acc.engagements || 0) + (data.engagements || 0),
        clicks: (acc.clicks || 0) + (data.clicks || 0),
        likes: (acc.likes || 0) + (data.likes || 0),
        shares: (acc.shares || 0) + (data.shares || 0),
        comments: (acc.comments || 0) + (data.comments || 0)
      }), {});

      teamAnalytics.push({
        member: member.name,
        profileKey: member.profileKey,
        totals,
        postCount: memberAnalytics.length
      });
    }

    console.log('✅ Team analytics complete:', teamAnalytics);
    return teamAnalytics;
  } catch (error) {
    console.error('❌ Error in team analytics:', error);
    throw error;
  }
}

/**
 * Example 5: Engagement Management
 * Add comments to engage with your audience
 */
export async function example5_EngageWithAudience(postId: string, platform: string) {
  try {
    const comment = await addComment({
      platform: platform as any,
      postId,
      text: "Thanks for all the amazing feedback! We're excited to help more rescues save lives with better marketing tools! 🐾❤️"
    });
    
    console.log('✅ Comment added:', comment);
    return comment;
  } catch (error) {
    console.error('❌ Error adding comment:', error);
    throw error;
  }
}

/**
 * Example 6: Direct Messaging
 * Send personalized messages to interested users
 */
export async function example6_DirectMessage() {
  try {
    const message = await sendMessage({
      platform: 'twitter',
      recipient: 'interested_rescue_org',
      message: "Hi! Thanks for your interest in Barkhaus. We'd love to help your rescue organization improve its marketing efforts! Would you like to schedule a demo?"
    });
    
    console.log('✅ Message sent:', message);
    return message;
  } catch (error) {
    console.error('❌ Error sending message:', error);
    throw error;
  }
}

/**
 * Example 7: Facebook Ad Campaign
 * Create targeted ads for rescue organizations
 */
export async function example7_FacebookAds() {
  try {
    const adCampaign = await createFacebookAd({
      campaignName: 'Barkhaus Launch Campaign',
      adSetName: 'Animal Rescue Professionals',
      adName: 'Barkhaus Marketing Platform Ad',
      objective: 'CONVERSIONS',
      targeting: {
        ageMin: 25,
        ageMax: 65,
        countries: ['US', 'CA', 'GB', 'AU'],
        interests: [
          'Animal welfare',
          'Pet adoption',
          'Nonprofit organizations',
          'Marketing automation',
          'Social media marketing'
        ],
        behaviors: [
          'Charitable donations (animal welfare)',
          'Pet owners',
          'Nonprofit board members'
        ]
      },
      budget: {
        dailyBudget: 50,
        bidStrategy: 'LOWEST_COST_WITHOUT_CAP'
      },
      creative: {
        headline: 'Transform Your Animal Rescue Marketing',
        description: 'Barkhaus helps animal rescues save more lives through powerful marketing automation. Streamline social media, email campaigns, and donor outreach.',
        callToAction: 'LEARN_MORE',
        imageUrl: 'https://example.com/barkhaus-ad-image.jpg',
        linkUrl: 'https://barkhaus.com/signup?utm_source=facebook&utm_campaign=launch'
      },
      schedule: {
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 days
      }
    });
    
    console.log('✅ Facebook ad campaign created:', adCampaign);
    return adCampaign;
  } catch (error) {
    console.error('❌ Error creating Facebook ad:', error);
    throw error;
  }
}

/**
 * Example 8: Complete Marketing Campaign
 * Orchestrate a full marketing campaign across platforms
 */
export async function example8_FullCampaign() {
  try {
    console.log('🚀 Starting Barkhaus marketing campaign...');
    
    // Step 1: Announce the launch
    const launchPost = await example1_SimplePost();
    
    // Step 2: Create platform-specific follow-up content
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
    const followUpPosts = await example2_PlatformSpecificPost();
    
    // Step 3: Schedule future content
    await example3_ScheduledPost();
    
    // Step 4: Create Facebook ads for broader reach
    const adCampaign = await example7_FacebookAds();
    
    // Step 5: Monitor and engage (after some time)
    setTimeout(async () => {
      if (launchPost.id) {
        await example4_GetAnalytics(launchPost.id);
        
        if (launchPost.postIds?.twitter) {
          await example5_EngageWithAudience(launchPost.postIds.twitter, 'twitter');
        }
      }
    }, 60000); // Check after 1 minute
    
    console.log('✅ Marketing campaign launched successfully!');
    
    return {
      launchPost,
      followUpPosts,
      adCampaign
    };
    
  } catch (error) {
    console.error('❌ Error in marketing campaign:', error);
    throw error;
  }
}

/**
 * Example: Complete Multi-User Workflow
 * End-to-end test of multi-user functionality
 */
export async function exampleCompleteMultiUserWorkflow() {
  try {
    console.log('🚀 Starting complete multi-user workflow test...');

    // Step 1: Create profiles for team members
    const teamMembers = [
      { userId: 'user_sarah', name: 'Sarah (Rescue Manager)' },
      { userId: 'user_mike', name: 'Mike (Volunteer Coordinator)' },
      { userId: 'user_emma', name: 'Emma (Social Media Manager)' }
    ];

    const profiles = [];

    for (const member of teamMembers) {
      console.log(`👤 Creating profile for ${member.name}...`);

      try {
        const profile = await exampleCreateProfile(member.userId, member.name);
        profiles.push({
          ...member,
          profileKey: profile.profileKey
        });
        console.log(`✅ Profile created for ${member.name}: ${profile.profileKey}`);
      } catch (error) {
        console.error(`❌ Failed to create profile for ${member.name}:`, error);
      }
    }

    // Step 2: Generate linking URLs (in real app, users would click these)
    console.log('🔗 Generating linking URLs for team members...');

    for (const profile of profiles) {
      try {
        const linkingResult = await exampleGenerateLinkingURL(profile.profileKey);
        console.log(`🔗 Linking URL for ${profile.name}: ${linkingResult.url}`);

        // In a real application, users would visit these URLs to connect their accounts
        // For testing, we'll simulate that they've connected Facebook and Twitter
        console.log(`   ⚠️  User should visit this URL to connect social accounts`);
      } catch (error) {
        console.error(`❌ Failed to generate linking URL for ${profile.name}:`, error);
      }
    }

    // Step 3: Simulate posting after accounts are connected
    console.log('📱 Simulating posts after social accounts are connected...');

    // Note: In real usage, you'd wait for webhook events to confirm connections
    // For this example, we'll assume connections are established

    const posts = [
      {
        profileKey: profiles[0]?.profileKey, // Sarah
        content: '🐕 Meet our newest rescue pups! These adorable babies are looking for their forever homes. Apply today! #AdoptDontShop #RescueDogs',
        platforms: ['facebook', 'instagram']
      },
      {
        profileKey: profiles[1]?.profileKey, // Mike
        content: '🙋‍♂️ Volunteer opportunity alert! Join us this Saturday for our adoption event. Help us find homes for these amazing animals! #Volunteer',
        platforms: ['twitter', 'linkedin']
      },
      {
        profileKey: profiles[2]?.profileKey, // Emma
        content: '📱 Follow our social media for daily updates, success stories, and adorable animal photos! Links in bio. #SocialMedia #AnimalRescue',
        platforms: ['twitter', 'instagram', 'facebook']
      }
    ];

    const postResults = [];

    for (const post of posts) {
      if (post.profileKey) {
        try {
          console.log(`📤 Publishing post with profile: ${post.profileKey}`);

          // Note: This will only work if the user has actually connected their accounts
          const result = await publishPost({
            text: post.content,
            platforms: post.platforms,
            profileKey: post.profileKey
          });

          postResults.push(result);
          console.log(`✅ Post published successfully`);
        } catch (error) {
          console.error(`❌ Failed to publish post:`, error);
          // This is expected if accounts aren't actually connected
        }
      }
    }

    console.log('✅ Multi-user workflow test complete!');

    return {
      profiles,
      postResults,
      summary: {
        profilesCreated: profiles.length,
        postsAttempted: posts.length,
        postsSuccessful: postResults.length
      }
    };

  } catch (error) {
    console.error('❌ Error in multi-user workflow:', error);
    throw error;
  }
}

// Export all examples for easy testing
export const examples = {
  // Profile Management
  createProfile: exampleCreateProfile,
  generateLinkingURL: exampleGenerateLinkingURL,
  userOnboarding: exampleUserOnboarding,

  // Multi-User Posting
  simplePost: example1_SimplePost,
  teamPosting: exampleTeamPosting,
  platformSpecific: example2_PlatformSpecificPost,
  scheduledPost: example3_ScheduledPost,

  // Analytics
  analytics: example4_GetAnalytics,
  teamAnalytics: exampleTeamAnalytics,

  // Engagement
  engagement: example5_EngageWithAudience,
  directMessage: example6_DirectMessage,

  // Advertising
  facebookAds: example7_FacebookAds,

  // Complete Workflows
  fullCampaign: example8_FullCampaign,
  multiUserWorkflow: exampleCompleteMultiUserWorkflow
};

// Uncomment to run examples:
// example1_SimplePost().catch(console.error);
// example8_FullCampaign().catch(console.error);
