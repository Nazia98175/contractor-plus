import Script from 'next/script'

export default function PushLapScript() {
  return (
    <Script
      src="https://pushlapgrowth.com/affiliate-tracker.js"
      data-affiliate=""
      data-program-id="696a59c9-758b-4c02-b5d0-cd59dc1c5351"
      strategy="lazyOnload"
    />
  )
}