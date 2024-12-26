"use client"
import { Hero } from '@/sections/Hero';
import { LogoTicker } from '@/sections/LogoTicker';
import { Services } from '@/sections/Services';
import { Testimonials } from '@/sections/Testimonials';
import { useRef } from 'react';
import { useScrollContext } from './ScrollContext';
import FoodSlider from '@/components/FoodSlider';
import { TimelineSection } from '@/sections/Timeline';

export default function Home() {
  const { serviceRef } = useScrollContext();

  return (
    <div className="bg-black">
      <Hero />
      <Services ref={serviceRef} />
      <Testimonials />
      <TimelineSection />
    </div>
  );
}
