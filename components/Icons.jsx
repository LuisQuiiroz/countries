function MoonIcon (props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-moon'
      {...props}
    >
      <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
    </svg>
  )
}

function SunIcon (props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      className='feather feather-sun'
      {...props}
    >
      <circle cx={12} cy={12} r={5} />
      <path d='M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42' />
    </svg>
  )
}

function ChevronIcon (props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      className='feather feather-chevron-down'
      {...props}
    >
      <path d='m6 9 6 6 6-6' />
    </svg>
  )
}

function SearchIcon (props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      className='feather feather-search'
      {...props}
    >
      <circle cx={11} cy={11} r={8} />
      <path d='m21 21-4.35-4.35' />
    </svg>
  )
}

function LeftIcon (props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      className='feather feather-arrow-left'
      {...props}
    >
      <path d='M19 12H5M12 19l-7-7 7-7' />
    </svg>
  )
}

export {
  MoonIcon,
  SunIcon,
  ChevronIcon,
  SearchIcon,
  LeftIcon
}
