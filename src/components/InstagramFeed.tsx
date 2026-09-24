import React from 'react';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { INSTAGRAM_POSTS, STUDIO_INFO } from '../config/studioData';
import { InstagramIcon } from './Icons';

export const InstagramFeed: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Live Social Grid</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-light text-white uppercase tracking-tight">
              FOLLOW THE <br />
              <span className="font-serif italic font-normal text-amber-200/90 tracking-normal">
                STORIES.
              </span>
            </h2>
            
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              Catch daily teasers, behind-the-scenes moments, and latest client frames on our official feed.
            </p>
          </div>

          <a
            href={STUDIO_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity shadow-lg"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow {STUDIO_INFO.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6-Image Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 block cursor-pointer"
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center gap-2">
                <div className="flex items-center gap-3 text-white text-xs font-semibold">
                  <div className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                <p className="text-[10px] text-zinc-300 line-clamp-2 italic">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Studio Follower Stats Placeholder */}
        <div className="mt-8 text-center text-xs text-zinc-500">
          Join 15,000+ followers celebrating visual storytelling across Tamil Nadu • <span className="text-amber-400 font-medium">{STUDIO_INFO.instagramHandle}</span>
        </div>

      </div>
    </section>
  );
};
