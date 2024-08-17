import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
import Web1Image from '../../../public/Web1.webp';
import Web2Image from '../../../public/Web2.webp';
import Web3Image from '../../../public/Web3.webp';

const Setup1 = React.memo(() => {
  return <img src={Web1Image.src} alt="Setup1" style={{ width: '100%' }} />;
});
const Setup2 = React.memo(() => {
  return <img src={Web2Image.src} alt="Setup2" style={{ width: '100%' }} />;
});
const Setup3 = React.memo(() => {
  return <img src={Web3Image.src} alt="Setup3" style={{ width: '100%' }} />;
});

export default function Application() {
  return (
    <section className="p-4 md:p-9 lg:p-16 bg-[#FFFFFF]">
      <Tabs defaultValue="Setup1" className="rounded-none">
        <TabsList className="w-full flex justify-between bg-[#FFFFFF] rounded-none mb-6">
          <TabsTrigger
            value="Setup1"
            className="border-b data-[state=active]:shadow-none data-[state=active]:border-b data-[state=active]:border-[#00ADEF] rounded-none flex-shrink-0 px-0 pb-1 text-xs md:text-lg"
          >
            Setup 1
          </TabsTrigger>
          <TabsTrigger
            value="Setup2"
            className="border-b data-[state=active]:shadow-none data-[state=active]:border-b data-[state=active]:border-[#00ADEF] rounded-none flex-shrink-0 px-0 pb-1 text-xs md:text-lg"
          >
            Setup 2
          </TabsTrigger>
          <TabsTrigger
            value="Setup3"
            className="border-b data-[state=active]:shadow-none data-[state=active]:border-b data-[state=active]:border-[#00ADEF] rounded-none flex-shrink-0 px-0 pb-1 text-xs md:text-lg"
          >
            Setup 3
          </TabsTrigger>
        </TabsList>
        <div className="">
          <TabsContent value="Setup1" className="">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
              <div className="flex items-center justify-center lg:justify-start">
                <Setup1 />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-bold text-center lg:text-left">
                  Setup 1
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Setup2" className="">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
              <div className="flex items-center justify-center lg:justify-start">
                <Setup2 />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-bold text-center lg:text-left">
                  Setup 2
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Setup3" className="">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
              <div className="flex items-center justify-center lg:justify-start">
                <Setup3 />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-bold text-center lg:text-left">
                  Setup 3
                </div>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
}
