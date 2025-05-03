"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Instagram, 
  Calendar, 
  X, 
  Heart, 
  MessageCircle, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight,
  Share2,
  Bookmark
} from "lucide-react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { Button } from "@/components/ui/button";

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption: string;
  timestamp: string;
}

export default function NewsPage() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [visiblePosts, setVisiblePosts] = useState<number>(12);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  useEffect(() => {
    async function fetchInstagramPosts() {
      try {
        setLoading(true);
        console.log('Fetching Instagram posts...');
        
        // Fetch Instagram posts using our API route
        const response = await fetch('/api/instagram?fields=id,media_url,permalink,caption,timestamp&limit=36');
        
        console.log('Instagram API response status:', response.status);
        
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Instagram API error:', errorData);
          throw new Error(errorData.error || 'Failed to fetch Instagram posts');
        }
        
        const data = await response.json();
        console.log('Instagram posts fetched:', data.data?.length || 0);
        
        if (data.data && Array.isArray(data.data) && data.data.length > 0) {
          setPosts(data.data);
        } else {
          console.warn('No Instagram posts found, using fallback data');
          throw new Error('No Instagram posts found');
        }
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Failed to load Instagram posts. Please try again later.');
        // Use fallback posts
        const fallbackPosts = [
          {
            id: "1",
            media_url: "/images/general/res-1-min.webp",
            permalink: "https://instagram.com/robotPOS",
            caption: "1 Mayıs Emek ve Dayanışma Günü Kutlu Olsun!",
            timestamp: "2024-05-01T10:00:00+0000"
          },
          {
            id: "2",
            media_url: "/images/general/rs5-min.webp",
            permalink: "https://instagram.com/robotPOS",
            caption: "Tavuk Dünyası'nın tüm şubelerinde robotPOS kullanılmaktadır.",
            timestamp: "2024-04-28T14:30:00+0000"
          },
          {
            id: "3",
            media_url: "/images/general/pos.jpg",
            permalink: "https://instagram.com/robotPOS",
            caption: "Kahve Dünyası'nın tüm şubelerinde robotPOS kullanılmaktadır.",
            timestamp: "2024-04-25T09:15:00+0000"
          },
          {
            id: "4",
            media_url: "/images/features/pos.jpg",
            permalink: "https://instagram.com/robotPOS",
            caption: "Kolibri Coffee'nin tüm şubelerinde robotPOS kullanılmaktadır.",
            timestamp: "2024-04-23T16:45:00+0000"
          },
          {
            id: "5",
            media_url: "/images/general/res-1-min.webp",
            permalink: "https://instagram.com/robotPOS",
            caption: "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı Kutlu Olsun!",
            timestamp: "2024-04-23T08:00:00+0000"
          },
          {
            id: "6",
            media_url: "/images/general/rs5-min.webp",
            permalink: "https://instagram.com/robotPOS",
            caption: "Avrupa Pastanesi'nin tüm şubelerinde robotPOS kullanılmaktadır.",
            timestamp: "2024-04-20T11:20:00+0000"
          },
          {
            id: "7",
            media_url: "/images/general/res-1-min.webp",
            permalink: "https://instagram.com/robotPOS",
            caption: "robotPOS ile işletmenizi dijitalleştirin!",
            timestamp: "2024-04-18T10:00:00+0000"
          },
          {
            id: "8",
            media_url: "/images/general/rs5-min.webp",
            permalink: "https://instagram.com/robotPOS",
            caption: "Yeni nesil ödeme kaydedici cihazlarımızla tanışın!",
            timestamp: "2024-04-15T14:30:00+0000"
          },
          {
            id: "9",
            media_url: "/images/general/pos.jpg",
            permalink: "https://instagram.com/robotPOS",
            caption: "Müşteri sadakat programlarımız ile müşterilerinizi elde tutun!",
            timestamp: "2024-04-12T09:15:00+0000"
          },
          {
            id: "10",
            media_url: "/images/features/pos.jpg",
            permalink: "https://instagram.com/robotPOS",
            caption: "Stok ve maliyet yönetimi çözümlerimiz ile işletmenizi kontrol altında tutun!",
            timestamp: "2024-04-10T16:45:00+0000"
          },
          {
            id: "11",
            media_url: "/images/general/res-1-min.webp",
            permalink: "https://instagram.com/robotPOS",
            caption: "QR Menü çözümlerimiz ile temassız sipariş alın!",
            timestamp: "2024-04-08T08:00:00+0000"
          },
          {
            id: "12",
            media_url: "/images/general/rs5-min.webp",
            permalink: "https://instagram.com/robotPOS",
            caption: "Zincir mağaza yönetimi çözümlerimiz ile tüm şubelerinizi tek merkezden yönetin!",
            timestamp: "2024-04-05T11:20:00+0000"
          }
        ];
        setPosts(fallbackPosts);
      } finally {
        setLoading(false);
      }
    }

    fetchInstagramPosts();
  }, []);

  const loadMorePosts = () => {
    setVisiblePosts(prevCount => Math.min(prevCount + 12, posts.length));
  };

  const openModal = (post: InstagramPost) => {
    const index = posts.findIndex(p => p.id === post.id);
    setSelectedPost(post);
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPost(null);
    setSelectedIndex(-1);
    document.body.style.overflow = 'auto';
  };

  const navigateModal = (direction: 'prev' | 'next') => {
    if (selectedIndex === -1 || posts.length === 0) return;
    
    let newIndex: number;
    if (direction === 'prev') {
      newIndex = selectedIndex > 0 ? selectedIndex - 1 : posts.length - 1;
    } else {
      newIndex = selectedIndex < posts.length - 1 ? selectedIndex + 1 : 0;
    }
    
    setSelectedPost(posts[newIndex]);
    setSelectedIndex(newIndex);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      navigateModal('prev');
    } else if (e.key === 'ArrowRight') {
      navigateModal('next');
    } else if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/general/res-1-min.webp"
            alt="robotPOS Haberler"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70" />
        </motion.div>
        <div className="container relative z-10 h-full mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Haberler ve Duyurular
            </h1>
            <p className="text-xl text-white/80">
              robotPOS'tan son gelişmeler ve duyurular
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                <Instagram className="mr-2 text-blue-600" />
                Instagram'da robotPOS
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Sosyal medya hesaplarımızdan son paylaşımlarımızı takip edin
              </p>
            </motion.div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="text-center py-10">
              <p className="text-red-500">{error}</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.slice(0, visiblePosts).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {/* Instagram Header */}
                    <div className="p-3 border-b flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center">
                        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                          <Instagram className="w-4 h-4 text-pink-600" />
                        </div>
                      </div>
                      <div className="ml-2">
                        <p className="font-medium text-sm">robotPOS</p>
                      </div>
                    </div>
                    
                    {/* Image */}
                    <div 
                      className="relative aspect-square cursor-pointer"
                      onClick={() => openModal(post)}
                    >
                      <Image
                        src={post.media_url}
                        alt={post.caption || "Instagram post"}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                      {/* Action Icons */}
                      <div className="flex items-center mb-3">
                        <Heart className="w-6 h-6 mr-2 text-gray-700 hover:text-red-500 transition-colors cursor-pointer" />
                        <MessageCircle className="w-6 h-6 mr-2 text-gray-700 hover:text-blue-500 transition-colors cursor-pointer" />
                      </div>
                      
                      {/* Caption */}
                      <p className="text-gray-800 text-sm mb-2 line-clamp-2">
                        <span className="font-medium">robotPOS</span> {post.caption}
                      </p>
                      
                      {/* Date */}
                      <p className="text-gray-500 text-xs">
                        {format(new Date(post.timestamp), 'dd MMMM yyyy', { locale: tr })}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Load More Button */}
              {visiblePosts < posts.length && (
                <div className="text-center mt-12">
                  <Button
                    onClick={loadMorePosts}
                    className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
                  >
                    <span>Daha Fazla Göster</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Modal for viewing posts */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Navigation Buttons */}
            <button 
              onClick={(e) => { e.stopPropagation(); navigateModal('prev'); }}
              className="absolute left-4 md:left-8 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300"
              aria-label="Previous post"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); navigateModal('next'); }}
              className="absolute right-4 md:right-8 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300"
              aria-label="Next post"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative w-full md:w-3/5 aspect-square bg-gray-100 dark:bg-gray-800">
                <Image
                  src={selectedPost.media_url}
                  alt={selectedPost.caption || "Instagram post"}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Content */}
              <div className="w-full md:w-2/5 flex flex-col h-full md:max-h-[90vh] dark:bg-gray-900 dark:text-gray-100">
                {/* Header */}
                <div className="p-4 border-b dark:border-gray-700 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-pink-600" />
                    </div>
                  </div>
                  <div className="ml-3 flex-grow">
                    <p className="font-medium">robotPOS</p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">
                      {format(new Date(selectedPost.timestamp), 'dd MMMM yyyy', { locale: tr })}
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="bg-gray-100 dark:bg-gray-800 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
                
                {/* Caption */}
                <div className="p-4 flex-grow overflow-y-auto">
                  <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line">
                    <span className="font-medium">robotPOS</span> {selectedPost.caption}
                  </p>
                </div>
                
                {/* Actions */}
                <div className="p-4 border-t dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Heart className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors cursor-pointer" />
                      <MessageCircle className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors cursor-pointer" />
                      <Share2 className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors cursor-pointer" />
                    </div>
                    <Bookmark className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-colors cursor-pointer" />
                  </div>
                  
                  <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                    {selectedIndex !== -1 && (
                      <p>
                        {selectedIndex + 1} / {posts.length}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}