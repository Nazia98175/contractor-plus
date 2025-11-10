import Script from "next/script";

export default function BugHerdScript() {
  return (
    <Script
      defer
      type="text/javascript"
      src="https://www.bugherd.com/sidebarv2.js?apikey=nre7tlm6cnhon4wmpdkbvq"
      async={true}
    />
  );
}
