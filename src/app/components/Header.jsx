'use client';
import { Button, Navbar, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { dark, light } from '@clerk/themes';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Head from 'next/head';

export default function Header() {
  const path = usePathname();
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const searchParams = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(searchParams);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    router.push(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(searchParams);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [searchParams]);

  return (
    <>
      {/* NetPub Ad Script in Head */}
      <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                let s = document.createElement("script");
                s.setAttribute("async", true);
                s.setAttribute("src", "https://fstatic.netpub.media/static/a814d31fccbb10b75e9fbf85fe3906ee.min.js?" + Date.now());
                document.querySelector("head").appendChild(s);
              })();
            `,
          }}
        ></script>
      </Head>

      {/* Main Navbar */}
      <Navbar className="border-b-2">
        <Link
          href="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            WeTech
          </span>
          Blogs
        </Link>
        <form onSubmit={handleSubmit}>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>
        <div className="flex gap-2 md:order-2">
          <Button
            className="w-12 h-10 hidden sm:inline"
            color="gray"
            pill
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? <FaSun /> : <FaMoon />}
          </Button>
          <SignedIn>
            <UserButton
              appearance={{
                baseTheme: theme === 'light' ? light : dark,
              }}
              userProfileUrl="/dashboard?tab=profile"
            />
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign In
              </Button>
            </Link>
          </SignedOut>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link href="/">
            <Navbar.Link active={path === '/'} as={'div'}>
              Home
            </Navbar.Link>
          </Link>

          <Link href="/search?category=null">
            <Navbar.Link active={path === '/search?category=null'} as={'div'}>
              Blogs
            </Navbar.Link>
          </Link>

          <Link href="/about">
            <Navbar.Link active={path === '/about'} as={'div'}>
              About
            </Navbar.Link>
          </Link>

          <Link href="/contact">
            <Navbar.Link active={path === '/contact'} as={'div'}>
              Contact us
            </Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>

      {/* NetPub Ad Unit */}
      <div className="flex justify-center my-4">
        <ins
          className="adv-a814d31fccbb10b75e9fbf85fe3906ee"
          data-sizes-desktop="200x200,250x250,300x250,336x280,468x60,678x60,700x300,728x90"
          data-sizes-mobile="200x200,250x250,300x250,336x280,360x100,360x300,360x50"
          data-slot="1"
        ></ins>
      </div>
    </>
  );
}
