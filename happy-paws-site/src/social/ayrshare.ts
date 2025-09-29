/**
 * Ayrshare Social Media API Integration
 *
 * Comprehensive service for managing social media posts across multiple platforms
 * including X (Twitter), Instagram, LinkedIn, Facebook, and more.
 *
 * Features:
 * - Multi-platform posting with media support
 * - Post scheduling
 * - Analytics retrieval
 * - Comment management
 * - Direct messaging
 * - Facebook Ads management
 * - Error handling with retry logic
 */

import axios, { type AxiosInstance, type AxiosError } from "axios";

// Types and Interfaces
export interface AyrshareConfig {
  apiKey: string;
  baseUrl?: string;
  timeout?: number;
  retryAttempts?: number;
  retryDelay?: number;
}

export interface PostData {
  post: string;
  platforms: Platform[];
  mediaUrls?: string[];
  scheduleDate?: string; // ISO format
  shortenLinks?: boolean;
  facebookOptions?: FacebookOptions;
  twitterOptions?: TwitterOptions;
  linkedInOptions?: LinkedInOptions;
  instagramOptions?: InstagramOptions;
}

export interface FacebookOptions {
  pageId?: string;
  groupId?: string;
  eventId?: string;
}

export interface TwitterOptions {
  replyToId?: string;
  quoteTweetId?: string;
  poll?: {
    options: string[];
    durationMinutes: number;
  };
}

export interface LinkedInOptions {
  companyId?: string;
  visibility?: 'public' | 'connections';
}

export interface InstagramOptions {
  storyOptions?: {
    backgroundColor?: string;
    textColor?: string;
  };
}

export type Platform =
  | 'twitter'
  | 'facebook'
  | 'instagram'
  | 'linkedin'
  | 'youtube'
  | 'tiktok'
  | 'pinterest'
  | 'reddit'
  | 'telegram';

export interface PostResponse {
  id: string;
  status: 'success' | 'error';
  postIds: Record<Platform, string>;
  errors?: Record<Platform, string>;
  warnings?: string[];
}

export interface AnalyticsData {
  postId: string;
  platform: Platform;
  impressions?: number;
  engagements?: number;
  clicks?: number;
  likes?: number;
  shares?: number;
  comments?: number;
  reach?: number;
  saves?: number;
  videoViews?: number;
  profileVisits?: number;
  websiteClicks?: number;
  emailClicks?: number;
  followClicks?: number;
  textClicks?: number;
  hashtagClicks?: number;
  mentionClicks?: number;
  mediaViews?: number;
  mediaEngagements?: number;
  detailExpands?: number;
  permalinkClicks?: number;
  appOpens?: number;
  appInstalls?: number;
  follows?: number;
  unfollows?: number;
  blockClicks?: number;
  reportClicks?: number;
  qualifiedImpressions?: number;
  qualifiedClicks?: number;
  qualifiedLikes?: number;
  qualifiedShares?: number;
  qualifiedComments?: number;
  qualifiedFollows?: number;
  qualifiedVideoViews?: number;
  costPerClick?: number;
  costPerImpression?: number;
  costPerEngagement?: number;
  clickThroughRate?: number;
  engagementRate?: number;
  videoCompletionRate?: number;
  averageWatchTime?: number;
  totalWatchTime?: number;
  uniqueViewers?: number;
  repeatViewers?: number;
  topAudienceCountry?: string;
  topAudienceCity?: string;
  topAudienceAge?: string;
  topAudienceGender?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CommentData {
  postId: string;
  platform: Platform;
  comment: string;
  parentCommentId?: string;
}

export interface CommentResponse {
  id: string;
  status: 'success' | 'error';
  commentId?: string;
  error?: string;
}

export interface MessageData {
  platform: Platform;
  recipient: string;
  message: string;
  mediaUrls?: string[];
}

export interface MessageResponse {
  id: string;
  status: 'success' | 'error';
  messageId?: string;
  error?: string;
}

export interface FacebookAdData {
  campaignName: string;
  adSetName: string;
  adName: string;
  objective: string;
  targeting: {
    ageMin?: number;
    ageMax?: number;
    genders?: number[];
    countries?: string[];
    interests?: string[];
    behaviors?: string[];
    customAudiences?: string[];
    lookalikes?: string[];
  };
  budget: {
    dailyBudget?: number;
    lifetimeBudget?: number;
    bidAmount?: number;
    bidStrategy?: string;
  };
  creative: {
    headline: string;
    description: string;
    callToAction: string;
    imageUrl?: string;
    videoUrl?: string;
    linkUrl?: string;
  };
  schedule?: {
    startDate: string;
    endDate?: string;
  };
}

export interface FacebookAdResponse {
  id: string;
  status: 'success' | 'error';
  campaignId?: string;
  adSetId?: string;
  adId?: string;
  error?: string;
}

export interface AyrshareError {
  status: number;
  message: string;
  code?: string;
  details?: any;
}

// Utility function to get environment variables
function getEnvVar(key: string, defaultValue?: string): string {
  // Try different environment variable patterns
  const value =
    import.meta.env?.[key] ||
    process.env?.[key] ||
    (typeof window !== 'undefined' && (window as any).__ENV__?.[key]) ||
    defaultValue;

  if (!value && !defaultValue) {
    throw new Error(`Environment variable ${key} is required but not set`);
  }

  return value;
}

/**
 * Main Ayrshare Service Class
 * Handles all social media operations with comprehensive error handling and retry logic
 */
export class AyrshareService {
  private client: AxiosInstance;
  private config: AyrshareConfig;

  constructor(config?: Partial<AyrshareConfig>) {
    this.config = {
      apiKey: getEnvVar('VITE_AYRSHARE_API_KEY'),
      baseUrl: 'https://app.ayrshare.com/api',
      timeout: 30000,
      retryAttempts: 3,
      retryDelay: 1000,
      ...config
    };

    this.client = axios.create({
      baseURL: this.config.baseUrl,
      timeout: this.config.timeout,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.config.apiKey}`
      }
    });

    // Add response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error) => this.handleError(error)
    );
  }

  /**
   * Error handling with retry logic
   */
  private async handleError(error: AxiosError): Promise<never> {
    const status = error.response?.status;
    const message = error.response?.data || error.message;

    // Log error details
    console.error('Ayrshare API Error:', {
      status,
      message,
      url: error.config?.url,
      method: error.config?.method
    });

    // Handle rate limiting (429) and server errors (5xx) with retry
    if (status === 429 || (status && status >= 500)) {
      const retryAfter = error.response?.headers['retry-after'];
      const delay = retryAfter ? parseInt(retryAfter) * 1000 : this.config.retryDelay!;

      console.log(`Rate limited or server error. Retrying after ${delay}ms...`);
      await this.sleep(delay);

      // Note: In a real implementation, you'd want to track retry attempts
      // and only retry a limited number of times
    }

    throw {
      status: status || 0,
      message: typeof message === 'string' ? message : JSON.stringify(message),
      code: error.code,
      details: error.response?.data
    } as AyrshareError;
  }

  /**
   * Sleep utility for retry delays
   */
  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Retry wrapper for API calls
   */
  private async withRetry<T>(
    operation: () => Promise<T>,
    attempts: number = this.config.retryAttempts!
  ): Promise<T> {
    for (let i = 0; i < attempts; i++) {
      try {
        return await operation();
      } catch (error: any) {
        const isLastAttempt = i === attempts - 1;
        const shouldRetry = error.status === 429 || (error.status >= 500 && error.status < 600);

        if (isLastAttempt || !shouldRetry) {
          throw error;
        }

        const delay = this.config.retryDelay! * Math.pow(2, i); // Exponential backoff
        console.log(`Attempt ${i + 1} failed. Retrying in ${delay}ms...`);
        await this.sleep(delay);
      }
    }

    throw new Error('Max retry attempts exceeded');
  }

  /**
   * Publish a post to multiple social media platforms
   */
  async publishPost(postData: PostData): Promise<PostResponse> {
    return this.withRetry(async () => {
      const response = await this.client.post('/post', {
        post: postData.post,
        platforms: postData.platforms,
        mediaUrls: postData.mediaUrls,
        scheduleDate: postData.scheduleDate,
        shortenLinks: postData.shortenLinks,
        facebookOptions: postData.facebookOptions,
        twitterOptions: postData.twitterOptions,
        linkedInOptions: postData.linkedInOptions,
        instagramOptions: postData.instagramOptions
      });

      return response.data;
    });
  }

  /**
   * Get analytics for a specific post
   */
  async getAnalytics(postId: string, platforms?: Platform[]): Promise<AnalyticsData[]> {
    return this.withRetry(async () => {
      const params: any = { id: postId };
      if (platforms) {
        params.platforms = platforms.join(',');
      }

      const response = await this.client.get('/analytics', { params });
      return response.data;
    });
  }

  /**
   * Get analytics for multiple posts
   */
  async getBulkAnalytics(postIds: string[], platforms?: Platform[]): Promise<AnalyticsData[]> {
    return this.withRetry(async () => {
      const params: any = { ids: postIds.join(',') };
      if (platforms) {
        params.platforms = platforms.join(',');
      }

      const response = await this.client.get('/analytics/bulk', { params });
      return response.data;
    });
  }

  /**
   * Add a comment to a post
   */
  async addComment(commentData: CommentData): Promise<CommentResponse> {
    return this.withRetry(async () => {
      const response = await this.client.post('/comment', {
        platform: commentData.platform,
        id: commentData.postId,
        comment: commentData.comment,
        parentCommentId: commentData.parentCommentId
      });

      return response.data;
    });
  }

  /**
   * Get comments for a post
   */
  async getComments(postId: string, platform: Platform): Promise<any[]> {
    return this.withRetry(async () => {
      const response = await this.client.get('/comment', {
        params: { id: postId, platform }
      });

      return response.data;
    });
  }

  /**
   * Send a direct message
   */
  async sendMessage(messageData: MessageData): Promise<MessageResponse> {
    return this.withRetry(async () => {
      const response = await this.client.post('/messages', {
        platform: messageData.platform,
        recipient: messageData.recipient,
        message: messageData.message,
        mediaUrls: messageData.mediaUrls
      });

      return response.data;
    });
  }

  /**
   * Get received messages
   */
  async getMessages(platform: Platform, limit?: number): Promise<any[]> {
    return this.withRetry(async () => {
      const params: any = { platform };
      if (limit) {
        params.limit = limit;
      }

      const response = await this.client.get('/messages', { params });
      return response.data;
    });
  }

  /**
   * Create a Facebook ad campaign
   */
  async createFacebookAd(adData: FacebookAdData): Promise<FacebookAdResponse> {
    return this.withRetry(async () => {
      const response = await this.client.post('/ads', {
        platform: 'facebook',
        campaignName: adData.campaignName,
        adSetName: adData.adSetName,
        adName: adData.adName,
        objective: adData.objective,
        targeting: adData.targeting,
        budget: adData.budget,
        creative: adData.creative,
        schedule: adData.schedule
      });

      return response.data;
    });
  }

  /**
   * Get Facebook ad performance
   */
  async getFacebookAdAnalytics(adId: string): Promise<any> {
    return this.withRetry(async () => {
      const response = await this.client.get('/ads/analytics', {
        params: { id: adId, platform: 'facebook' }
      });

      return response.data;
    });
  }

  /**
   * Delete a post
   */
  async deletePost(postId: string, platform: Platform): Promise<any> {
    return this.withRetry(async () => {
      const response = await this.client.delete('/post', {
        data: { id: postId, platform }
      });

      return response.data;
    });
  }

  /**
   * Get user profile information
   */
  async getProfile(platform: Platform): Promise<any> {
    return this.withRetry(async () => {
      const response = await this.client.get('/profiles', {
        params: { platform }
      });

      return response.data;
    });
  }

  /**
   * Get post history
   */
  async getPostHistory(platform?: Platform, limit?: number): Promise<any[]> {
    return this.withRetry(async () => {
      const params: any = {};
      if (platform) {
        params.platform = platform;
      }
      if (limit) {
        params.limit = limit;
      }

      const response = await this.client.get('/history', { params });
      return response.data;
    });
  }
}

// Create a default instance
const defaultAyrshare = new AyrshareService();

// --------- Helper Functions ---------

/**
 * Publish a post to multiple platforms (simplified interface)
 */
export async function publishPost({
  text,
  platforms,
  mediaUrls = [],
  scheduleDate,
}: {
  text: string;
  platforms: Platform[];
  mediaUrls?: string[];
  scheduleDate?: string; // ISO string for scheduling
}): Promise<PostResponse> {
  return defaultAyrshare.publishPost({
    post: text,
    platforms,
    mediaUrls,
    scheduleDate
  });
}

/**
 * Retrieve analytics for a specific post ID
 */
export async function getAnalytics(postId: string, platforms?: Platform[]): Promise<AnalyticsData[]> {
  return defaultAyrshare.getAnalytics(postId, platforms);
}

/**
 * Add a comment to a post
 */
export async function addComment({
  platform,
  postId,
  text,
}: {
  platform: Platform;
  postId: string;
  text: string;
}): Promise<CommentResponse> {
  return defaultAyrshare.addComment({
    platform,
    postId,
    comment: text
  });
}

/**
 * Send a direct message
 */
export async function sendMessage({
  platform,
  recipient,
  message,
  mediaUrls,
}: {
  platform: Platform;
  recipient: string;
  message: string;
  mediaUrls?: string[];
}): Promise<MessageResponse> {
  return defaultAyrshare.sendMessage({
    platform,
    recipient,
    message,
    mediaUrls
  });
}

/**
 * Create a Facebook ad campaign
 */
export async function createFacebookAd(adData: FacebookAdData): Promise<FacebookAdResponse> {
  return defaultAyrshare.createFacebookAd(adData);
}

/**
 * Utility function to schedule a post for a specific time
 */
export function schedulePost(date: Date): string {
  return date.toISOString();
}

/**
 * Utility function to create a post for multiple platforms with different content
 */
export async function publishMultiPlatformPost({
  defaultText,
  platformSpecific = {},
  mediaUrls = [],
  scheduleDate,
}: {
  defaultText: string;
  platformSpecific?: Partial<Record<Platform, string>>;
  mediaUrls?: string[];
  scheduleDate?: string;
}): Promise<PostResponse[]> {
  const results: PostResponse[] = [];

  // Group platforms by their content
  const contentGroups = new Map<string, Platform[]>();

  // Add platforms with specific content
  Object.entries(platformSpecific).forEach(([platform, text]) => {
    if (!contentGroups.has(text)) {
      contentGroups.set(text, []);
    }
    contentGroups.get(text)!.push(platform as Platform);
  });

  // Add remaining platforms to default content group
  const allPlatforms: Platform[] = ['twitter', 'facebook', 'instagram', 'linkedin'];
  const usedPlatforms = new Set(Object.keys(platformSpecific));
  const remainingPlatforms = allPlatforms.filter(p => !usedPlatforms.has(p));

  if (remainingPlatforms.length > 0) {
    if (!contentGroups.has(defaultText)) {
      contentGroups.set(defaultText, []);
    }
    contentGroups.get(defaultText)!.push(...remainingPlatforms);
  }

  // Publish to each content group
  for (const [text, platforms] of contentGroups) {
    if (platforms.length > 0) {
      const result = await publishPost({
        text,
        platforms,
        mediaUrls,
        scheduleDate
      });
      results.push(result);
    }
  }

  return results;
}

// --------- Example Usage ---------

/**
 * Example: Post to multiple platforms with Barkhaus launch announcement
 */
export async function exampleBarkhaushLaunch(): Promise<void> {
  try {
    console.log('🚀 Publishing Barkhaus launch announcement...');

    // Example 1: Simple post to multiple platforms
    const simplePost = await publishPost({
      text: "🚀 Check out our new Barkhaus launch! The future of animal rescue marketing automation is here. #Barkhaus #AnimalRescue #MarketingAutomation",
      platforms: ['twitter', 'instagram', 'linkedin'],
      mediaUrls: ['https://example.com/barkhaus-launch-image.jpg']
    });

    console.log('✅ Simple post published:', simplePost);

    // Example 2: Platform-specific content
    const multiPlatformPost = await publishMultiPlatformPost({
      defaultText: "🚀 Check out our new Barkhaus launch!",
      platformSpecific: {
        twitter: "🚀 Excited to announce #Barkhaus - revolutionizing animal rescue marketing! 🐾 #AnimalRescue #MarketingTech",
        linkedin: "We're thrilled to introduce Barkhaus, our comprehensive marketing automation platform designed specifically for animal rescue organizations. This innovative solution helps rescues streamline their outreach, manage social media presence, and ultimately save more lives. #AnimalRescue #MarketingAutomation #SocialImpact",
        instagram: "🐾✨ Introducing Barkhaus! ✨🐾\n\nThe game-changing marketing platform for animal rescues is finally here! 🚀\n\n#Barkhaus #AnimalRescue #SaveLives #MarketingMagic"
      },
      mediaUrls: ['https://example.com/barkhaus-launch-image.jpg']
    });

    console.log('✅ Multi-platform post published:', multiPlatformPost);

    // Example 3: Scheduled post for later
    const scheduledDate = new Date();
    scheduledDate.setHours(scheduledDate.getHours() + 2); // Schedule for 2 hours from now

    const scheduledPost = await publishPost({
      text: "🎉 Don't miss our Barkhaus demo at 3 PM today! See how we're transforming animal rescue marketing. Register now! 🐕 #BarkhaushDemo #AnimalRescue",
      platforms: ['twitter', 'facebook', 'linkedin'],
      scheduleDate: schedulePost(scheduledDate)
    });

    console.log('✅ Scheduled post created:', scheduledPost);

    // Example 4: Get analytics for the first post
    if (simplePost.id) {
      setTimeout(async () => {
        try {
          const analytics = await getAnalytics(simplePost.id);
          console.log('📊 Post analytics:', analytics);
        } catch (error) {
          console.error('❌ Error fetching analytics:', error);
        }
      }, 5000); // Wait 5 seconds before fetching analytics
    }

    // Example 5: Add a comment to engage with audience
    if (simplePost.postIds?.twitter) {
      setTimeout(async () => {
        try {
          const comment = await addComment({
            platform: 'twitter',
            postId: simplePost.postIds.twitter,
            text: "Thanks for all the amazing feedback! We're excited to help more rescues save lives with better marketing tools! 🐾❤️"
          });
          console.log('✅ Comment added:', comment);
        } catch (error) {
          console.error('❌ Error adding comment:', error);
        }
      }, 10000); // Wait 10 seconds before commenting
    }

  } catch (error) {
    console.error('❌ Error in Barkhaus launch example:', error);
    throw error;
  }
}

/**
 * Example: Create a Facebook ad campaign for Barkhaus
 */
export async function exampleFacebookAd(): Promise<void> {
  try {
    console.log('📢 Creating Facebook ad campaign for Barkhaus...');

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
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 days from now
      }
    });

    console.log('✅ Facebook ad campaign created:', adCampaign);

    // Monitor ad performance after 24 hours
    if (adCampaign.adId) {
      setTimeout(async () => {
        try {
          const adAnalytics = await defaultAyrshare.getFacebookAdAnalytics(adCampaign.adId!);
          console.log('📊 Facebook ad analytics:', adAnalytics);
        } catch (error) {
          console.error('❌ Error fetching ad analytics:', error);
        }
      }, 24 * 60 * 60 * 1000); // Check after 24 hours
    }

  } catch (error) {
    console.error('❌ Error creating Facebook ad:', error);
    throw error;
  }
}

// Export the service instance and helper functions
export { defaultAyrshare };
export default AyrshareService;

// Uncomment to test the examples:
// exampleBarkhaushLaunch().catch(console.error);
// exampleFacebookAd().catch(console.error);
