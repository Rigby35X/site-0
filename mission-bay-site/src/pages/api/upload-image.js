/**
 * API Endpoint for Image Upload
 * Handles image uploads for website content sections
 */

import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

export async function POST({ request }) {
    try {
        const formData = await request.formData();
        const image = formData.get('image');
        const section = formData.get('section') || 'general';
        
        if (!image || !image.name) {
            return new Response(JSON.stringify({
                success: false,
                error: 'No image file provided'
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Validate file type
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
        if (!allowedTypes.includes(image.type)) {
            return new Response(JSON.stringify({
                success: false,
                error: 'Invalid file type. Only JPEG, PNG, GIF, and WebP images are allowed.'
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Validate file size (5MB limit)
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (image.size > maxSize) {
            return new Response(JSON.stringify({
                success: false,
                error: 'File size too large. Maximum size is 5MB.'
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Create upload directory if it doesn't exist
        const uploadDir = path.join(process.cwd(), 'public', 'uploads', section);
        if (!existsSync(uploadDir)) {
            await mkdir(uploadDir, { recursive: true });
        }

        // Generate unique filename
        const timestamp = Date.now();
        const extension = path.extname(image.name);
        const filename = `${timestamp}-${Math.random().toString(36).substring(2)}${extension}`;
        const filepath = path.join(uploadDir, filename);

        // Convert image to buffer and save
        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);
        await writeFile(filepath, buffer);

        // Return the public URL
        const imageUrl = `/uploads/${section}/${filename}`;

        console.log('✅ Image uploaded successfully:', imageUrl);

        return new Response(JSON.stringify({
            success: true,
            imageUrl: imageUrl,
            filename: filename,
            size: image.size,
            type: image.type,
            message: 'Image uploaded successfully'
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('❌ Image upload error:', error);
        
        return new Response(JSON.stringify({
            success: false,
            error: 'Failed to upload image: ' + error.message
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
    return new Response(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
}
