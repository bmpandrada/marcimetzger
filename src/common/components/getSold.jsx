import React from "react";

export default function getSold() {
  return (
    <section class='relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px]'>
      <div className='container mx-auto px-4'>
        {/* TITLE */}
        <div className='mb-[60px] text-center'>
          <span className='font-heading block text-3xl font-light text-primary'>GET IT SOLD</span>
        </div>

        {/* CARD GRID */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {[
            {
              img: "/images/blog/img-1.webp",
              title: "Top Residential Sales Last 5 Years",
              text: "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
            },
            {
              img: "/images/blog/img-2.webp",
              title: "Don't Just List it...",
              text: "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
            },
            {
              img: "/images/blog/img-3.webp",
              title: "Guide to Buyers",
              text: "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
            },
          ].map((item, index) => (
            <div key={index} className='flex h-full flex-col overflow-hidden bg-white shadow-md transition hover:shadow-lg dark:bg-dark-2'>
              {/* IMAGE */}
              <div className='h-[220px] w-full overflow-hidden'>
                <img src={item.img} alt='' className='h-full w-full object-cover object-center transition duration-300 hover:scale-105' />
              </div>

              {/* CONTENT */}
              <div className='flex h-auto flex-col p-6'>
                <h3 className='mb-4 text-xl font-semibold text-dark dark:text-white'>{item.title}</h3>
                <p className='mb-6 text-base text-body-color dark:text-dark-6'>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <span class='absolute left-4 top-4 -z-1'>
          <svg width='48' height='134' viewBox='0 0 48 134' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='45.6673' cy='132' r='1.66667' transform='rotate(180 45.6673 132)' fill='#13C296'></circle>
            <circle cx='45.6673' cy='117.333' r='1.66667' transform='rotate(180 45.6673 117.333)' fill='#13C296'></circle>
            <circle cx='45.6673' cy='102.667' r='1.66667' transform='rotate(180 45.6673 102.667)' fill='#13C296'></circle>
            <circle cx='45.6673' cy='88.0001' r='1.66667' transform='rotate(180 45.6673 88.0001)' fill='#13C296'></circle>
            <circle cx='45.6673' cy='73.3335' r='1.66667' transform='rotate(180 45.6673 73.3335)' fill='#13C296'></circle>
            <circle cx='45.6673' cy='45.0001' r='1.66667' transform='rotate(180 45.6673 45.0001)' fill='#13C296'></circle>
            <circle cx='45.6673' cy='16.0001' r='1.66667' transform='rotate(180 45.6673 16.0001)' fill='#13C296'></circle>
            <circle cx='45.6673' cy='59.0001' r='1.66667' transform='rotate(180 45.6673 59.0001)' fill='#13C296'></circle>
            <circle cx='45.6673' cy='30.6668' r='1.66667' transform='rotate(180 45.6673 30.6668)' fill='#13C296'></circle>
            <circle cx='45.6673' cy='1.66683' r='1.66667' transform='rotate(180 45.6673 1.66683)' fill='#13C296'></circle>
            <circle cx='31.0013' cy='132' r='1.66667' transform='rotate(180 31.0013 132)' fill='#13C296'></circle>
            <circle cx='31.0013' cy='117.333' r='1.66667' transform='rotate(180 31.0013 117.333)' fill='#13C296'></circle>
            <circle cx='31.0013' cy='102.667' r='1.66667' transform='rotate(180 31.0013 102.667)' fill='#13C296'></circle>
            <circle cx='31.0013' cy='88.0001' r='1.66667' transform='rotate(180 31.0013 88.0001)' fill='#13C296'></circle>
            <circle cx='31.0013' cy='73.3335' r='1.66667' transform='rotate(180 31.0013 73.3335)' fill='#13C296'></circle>
            <circle cx='31.0013' cy='45.0001' r='1.66667' transform='rotate(180 31.0013 45.0001)' fill='#13C296'></circle>
            <circle cx='31.0013' cy='16.0001' r='1.66667' transform='rotate(180 31.0013 16.0001)' fill='#13C296'></circle>
            <circle cx='31.0013' cy='59.0001' r='1.66667' transform='rotate(180 31.0013 59.0001)' fill='#13C296'></circle>
            <circle cx='31.0013' cy='30.6668' r='1.66667' transform='rotate(180 31.0013 30.6668)' fill='#13C296'></circle>
            <circle cx='31.0013' cy='1.66683' r='1.66667' transform='rotate(180 31.0013 1.66683)' fill='#13C296'></circle>
            <circle cx='16.3333' cy='132' r='1.66667' transform='rotate(180 16.3333 132)' fill='#13C296'></circle>
            <circle cx='16.3333' cy='117.333' r='1.66667' transform='rotate(180 16.3333 117.333)' fill='#13C296'></circle>
            <circle cx='16.3333' cy='102.667' r='1.66667' transform='rotate(180 16.3333 102.667)' fill='#13C296'></circle>
            <circle cx='16.3333' cy='88.0001' r='1.66667' transform='rotate(180 16.3333 88.0001)' fill='#13C296'></circle>
            <circle cx='16.3333' cy='73.3335' r='1.66667' transform='rotate(180 16.3333 73.3335)' fill='#13C296'></circle>
            <circle cx='16.3333' cy='45.0001' r='1.66667' transform='rotate(180 16.3333 45.0001)' fill='#13C296'></circle>
            <circle cx='16.3333' cy='16.0001' r='1.66667' transform='rotate(180 16.3333 16.0001)' fill='#13C296'></circle>
            <circle cx='16.3333' cy='59.0001' r='1.66667' transform='rotate(180 16.3333 59.0001)' fill='#13C296'></circle>
            <circle cx='16.3333' cy='30.6668' r='1.66667' transform='rotate(180 16.3333 30.6668)' fill='#13C296'></circle>
            <circle cx='16.3333' cy='1.66683' r='1.66667' transform='rotate(180 16.3333 1.66683)' fill='#13C296'></circle>
            <circle cx='1.66732' cy='132' r='1.66667' transform='rotate(180 1.66732 132)' fill='#13C296'></circle>
            <circle cx='1.66732' cy='117.333' r='1.66667' transform='rotate(180 1.66732 117.333)' fill='#13C296'></circle>
            <circle cx='1.66732' cy='102.667' r='1.66667' transform='rotate(180 1.66732 102.667)' fill='#13C296'></circle>
            <circle cx='1.66732' cy='88.0001' r='1.66667' transform='rotate(180 1.66732 88.0001)' fill='#13C296'></circle>
            <circle cx='1.66732' cy='73.3335' r='1.66667' transform='rotate(180 1.66732 73.3335)' fill='#13C296'></circle>
            <circle cx='1.66732' cy='45.0001' r='1.66667' transform='rotate(180 1.66732 45.0001)' fill='#13C296'></circle>
            <circle cx='1.66732' cy='16.0001' r='1.66667' transform='rotate(180 1.66732 16.0001)' fill='#13C296'></circle>
            <circle cx='1.66732' cy='59.0001' r='1.66667' transform='rotate(180 1.66732 59.0001)' fill='#13C296'></circle>
            <circle cx='1.66732' cy='30.6668' r='1.66667' transform='rotate(180 1.66732 30.6668)' fill='#13C296'></circle>
            <circle cx='1.66732' cy='1.66683' r='1.66667' transform='rotate(180 1.66732 1.66683)' fill='#13C296'></circle>
          </svg>
        </span>
        <span class='absolute bottom-4 right-4 -z-1'>
          <svg width='48' height='134' viewBox='0 0 48 134' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='45.6673' cy='132' r='1.66667' transform='rotate(180 45.6673 132)' fill='#3758F9'></circle>
            <circle cx='45.6673' cy='117.333' r='1.66667' transform='rotate(180 45.6673 117.333)' fill='#3758F9'></circle>
            <circle cx='45.6673' cy='102.667' r='1.66667' transform='rotate(180 45.6673 102.667)' fill='#3758F9'></circle>
            <circle cx='45.6673' cy='88.0001' r='1.66667' transform='rotate(180 45.6673 88.0001)' fill='#3758F9'></circle>
            <circle cx='45.6673' cy='73.3333' r='1.66667' transform='rotate(180 45.6673 73.3333)' fill='#3758F9'></circle>
            <circle cx='45.6673' cy='45.0001' r='1.66667' transform='rotate(180 45.6673 45.0001)' fill='#3758F9'></circle>
            <circle cx='45.6673' cy='16.0001' r='1.66667' transform='rotate(180 45.6673 16.0001)' fill='#3758F9'></circle>
            <circle cx='45.6673' cy='59.0001' r='1.66667' transform='rotate(180 45.6673 59.0001)' fill='#3758F9'></circle>
            <circle cx='45.6673' cy='30.6668' r='1.66667' transform='rotate(180 45.6673 30.6668)' fill='#3758F9'></circle>
            <circle cx='45.6673' cy='1.66683' r='1.66667' transform='rotate(180 45.6673 1.66683)' fill='#3758F9'></circle>
            <circle cx='31.0006' cy='132' r='1.66667' transform='rotate(180 31.0006 132)' fill='#3758F9'></circle>
            <circle cx='31.0006' cy='117.333' r='1.66667' transform='rotate(180 31.0006 117.333)' fill='#3758F9'></circle>
            <circle cx='31.0006' cy='102.667' r='1.66667' transform='rotate(180 31.0006 102.667)' fill='#3758F9'></circle>
            <circle cx='31.0006' cy='88.0001' r='1.66667' transform='rotate(180 31.0006 88.0001)' fill='#3758F9'></circle>
            <circle cx='31.0008' cy='73.3333' r='1.66667' transform='rotate(180 31.0008 73.3333)' fill='#3758F9'></circle>
            <circle cx='31.0008' cy='45.0001' r='1.66667' transform='rotate(180 31.0008 45.0001)' fill='#3758F9'></circle>
            <circle cx='31.0008' cy='16.0001' r='1.66667' transform='rotate(180 31.0008 16.0001)' fill='#3758F9'></circle>
            <circle cx='31.0008' cy='59.0001' r='1.66667' transform='rotate(180 31.0008 59.0001)' fill='#3758F9'></circle>
            <circle cx='31.0008' cy='30.6668' r='1.66667' transform='rotate(180 31.0008 30.6668)' fill='#3758F9'></circle>
            <circle cx='31.0008' cy='1.66683' r='1.66667' transform='rotate(180 31.0008 1.66683)' fill='#3758F9'></circle>
            <circle cx='16.3341' cy='132' r='1.66667' transform='rotate(180 16.3341 132)' fill='#3758F9'></circle>
            <circle cx='16.3341' cy='117.333' r='1.66667' transform='rotate(180 16.3341 117.333)' fill='#3758F9'></circle>
            <circle cx='16.3341' cy='102.667' r='1.66667' transform='rotate(180 16.3341 102.667)' fill='#3758F9'></circle>
            <circle cx='16.3341' cy='88.0001' r='1.66667' transform='rotate(180 16.3341 88.0001)' fill='#3758F9'></circle>
            <circle cx='16.3338' cy='73.3333' r='1.66667' transform='rotate(180 16.3338 73.3333)' fill='#3758F9'></circle>
            <circle cx='16.3338' cy='45.0001' r='1.66667' transform='rotate(180 16.3338 45.0001)' fill='#3758F9'></circle>
            <circle cx='16.3338' cy='16.0001' r='1.66667' transform='rotate(180 16.3338 16.0001)' fill='#3758F9'></circle>
            <circle cx='16.3338' cy='59.0001' r='1.66667' transform='rotate(180 16.3338 59.0001)' fill='#3758F9'></circle>
            <circle cx='16.3338' cy='30.6668' r='1.66667' transform='rotate(180 16.3338 30.6668)' fill='#3758F9'></circle>
            <circle cx='16.3338' cy='1.66683' r='1.66667' transform='rotate(180 16.3338 1.66683)' fill='#3758F9'></circle>
            <circle cx='1.66732' cy='132' r='1.66667' transform='rotate(180 1.66732 132)' fill='#3758F9'></circle>
            <circle cx='1.66732' cy='117.333' r='1.66667' transform='rotate(180 1.66732 117.333)' fill='#3758F9'></circle>
            <circle cx='1.66732' cy='102.667' r='1.66667' transform='rotate(180 1.66732 102.667)' fill='#3758F9'></circle>
            <circle cx='1.66732' cy='88.0001' r='1.66667' transform='rotate(180 1.66732 88.0001)' fill='#3758F9'></circle>
            <circle cx='1.66732' cy='73.3333' r='1.66667' transform='rotate(180 1.66732 73.3333)' fill='#3758F9'></circle>
            <circle cx='1.66732' cy='45.0001' r='1.66667' transform='rotate(180 1.66732 45.0001)' fill='#3758F9'></circle>
            <circle cx='1.66732' cy='16.0001' r='1.66667' transform='rotate(180 1.66732 16.0001)' fill='#3758F9'></circle>
            <circle cx='1.66732' cy='59.0001' r='1.66667' transform='rotate(180 1.66732 59.0001)' fill='#3758F9'></circle>
            <circle cx='1.66732' cy='30.6668' r='1.66667' transform='rotate(180 1.66732 30.6668)' fill='#3758F9'></circle>
            <circle cx='1.66732' cy='1.66683' r='1.66667' transform='rotate(180 1.66732 1.66683)' fill='#3758F9'></circle>
          </svg>
        </span>
      </div>
    </section>
  );
}
