import { component$, useSignal } from '@builder.io/qwik';

import Logo from './Logo';

const Header = component$(() => {
  const open = useSignal(false);
  const isOpen = open.value;

  return (
    <header class="flex flex-row items-center justify-between w-full px-2 lg:p-4 md:bg-transparent">
      <a class="my-5 lg:my-0" href="/">
        <Logo height={44} fill="#fff" />
      </a>
      <nav
        class={`z-10 text-center md:text-left absolute inset-0 p-5 md:p-0 translate-y-16 md:translate-y-0 md:relative  md:flex flex-col md:flex-row items-stretch gap-5 md:gap-12 [&>a]:py-1 bg-[#0f182a] overflow-hidden h-[240px] md:h-auto transition-opacity duration-300 ease-out animate-nav ${
          isOpen ? 'flex' : 'hidden'
        }`}>
        <a href="/#skills">Skills</a>
        <a href="/#projects">Projects</a>
        <a href="/#contact">Contacts</a>
        <a
          href="https://blog.abdulsamad.dev"
          target="_blank"
          rel="noopener"
          class="bg-primary text-white rounded-full px-5 ml-0 lg:ml-10">
          Blog
        </a>
      </nav>
      <button
        onClick$={() => (open.value = !isOpen)}
        class={`md:hidden flex items-center justify-center z-50 h-[40px] w-[40px] p-1 relative border-none text-slate-50 shadow-sm focus:outline-1 focus:outline- focus:outline-[rgba(87,87,87,0.5)] ${
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
