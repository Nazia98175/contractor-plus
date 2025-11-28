const LeadsyScript = () => (
  <script
    id="leadsy-vtag-loader"
    dangerouslySetInnerHTML={{
      __html: `
        (function() {
          var restrictedPath = /^\/resources\/construction-costs\//;
          var currentPath = window.location.pathname;
          if (!restrictedPath.test(currentPath)) {
            var script = document.createElement('script');
            script.id = 'vtag-ai-js';
            script.async = true;
            script.src = 'https://r2.leadsy.ai/tag.js';
            script.setAttribute('data-pid', 'XDvkYyQWvbGG7nU9');
            script.setAttribute('data-version', '062024');
            document.head.appendChild(script);
          }
        })();
      `,
    }}
  />
);

export default LeadsyScript;
