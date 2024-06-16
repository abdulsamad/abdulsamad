import { component$, useSignal } from '@builder.io/qwik';

import Logo from './Logo';

const Header = component$(() => {
  const open = useSignal(false);
  const isOpen = open.value;

  return (
    <header class="flex w-full flex-row items-center justify-between px-2 md:bg-transparent lg:p-4">
      <a class="my-5 lg:my-0" href="/">
        <Logo height={44} fill="#fff" />
      </a>
      <nav
        class={`absolute inset-0 z-10 h-[240px] translate-y-16 animate-nav flex-col items-stretch gap-5 overflow-hidden bg-[#0f182a] p-5 text-center transition-opacity duration-300 ease-out md:relative md:flex md:h-auto md:translate-y-0 md:flex-row md:gap-12 md:p-0 md:text-left [&>a]:py-1 ${
          isOpen ? 'flex' : 'hidden'
        }`}>
        <a href="/#skills">Skills</a>
        <a href="/#projects">Projects</a>
        <a href="/#contact">Contacts</a>
        <a
          href="https://blog.abdulsamad.dev"
          target="_blank"
          rel="noopener"
          class="ml-0 rounded-full bg-primary px-5 text-white lg:ml-10">
          Blog
        </a>
      </nav>
      <button
        onClick$={() => (open.value = !isOpen)}
        class={`focus:outline- relative z-50 flex h-[40px] w-[40px] items-center justify-center border-none p-1 text-slate-50 shadow-sm focus:outline-1 focus:outline-[rgba(87,87,87,0.5)] md:hidden ${
          open ? '' : 'active'
        }`}>
        <svg
          class="h-[35px] w-[35px] [&>*]:fill-none [&>*]:stroke-current [&>*]:stroke-[6] [&_path]:transition-[stroke-dasharray_450ms_cubic-bezier(0.4,0,0.2,1),_stroke-dashoffset_450ms_cubic-bezier(0.4,0,0.2,1)]"
          height="35px"
          width="35px"
          viewBox="0 0 100 100"
          aria-hidden="true">
          <path
            class="top"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            style={{
              strokeDasharray: open.value ? '90 207' : '60 207',
              strokeDashoffset: open.value ? '-134' : '0',
            }}></path>
          <path
            class="middle"
            d="M 20,50 H 80"
            style={{
              strokeDasharray: open.value ? '1 60' : '60 60;',
              strokeDashoffset: open.value ? '-30' : '0',
            }}></path>
          <path
            class="bottom"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            style={{
              strokeDasharray: open.value ? '90 207' : '60 207',
              strokeDashoffset: open.value ? '-134' : '0',
            }}></path>
        </svg>
        <div class="sr-only">Menu</div>
      </button>
    </header>
  );
});

export default Header;
