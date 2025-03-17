import "./globals.css";
import "./pluggins/application.js";

export const metadata = {
  title: "Summus Consultoria & licitações",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <head>
      <meta charSet="utf-8" />
  <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Basic template for a service</title>
  <meta name="description" content="A basic template for a service landing page" />
  <meta property="og:url" content="http://project12523689.tilda.ws" />
  <meta property="og:title" content="Basic template for a service" />
  <meta property="og:description" content="A basic template for a service landing page" />
  <meta property="og:type" content="website" />
  <meta property="og:image"
    content="https://static.tildacdn.info/tild6330-6262-4434-a664-323234353864/-/resize/504x/logo.png" />
  <link rel="canonical" href="http://project12523689.tilda.ws"/> 
  <meta name="format-detection" content="telephone=no"/>
  <meta httpEquiv="x-dns-prefetch-control" content="on"/>
  <link rel="dns-prefetch" href="https://ws.tildacdn.com"/>
  <link rel="dns-prefetch" href="https://static.tildacdn.info"/>
  <meta name="robots" content="nofollow" />
  <link rel="shortcut icon" href="https://static.tildacdn.info/img/tildafavicon.ico" type="image/x-icon" />
  <script src="https://neo.tildacdn.com/js/tilda-fallback-1.0.min.js" async charSet="utf-8"></script>
  <link 
  rel="stylesheet" 
  href="https://static.tildacdn.info/css/tilda-grid-3.0.min.css" 
  type="text/css" 
  media="all" 
/>
<link 
  rel="stylesheet" 
  href="https://static.tildacdn.info/ws/project12523689/tilda-blocks-page65016175.min.css?t=1742022174" 
  type="text/css" 
  media="all" 
/>

<link 
  rel="stylesheet" 
  href="https://static.tildacdn.info/ws/project12523689/tilda-blocks-page65016175.min.css?t=1742022174" 
  type="text/css" 
  media="all" 
/>
  <link rel="preconnect" href="https://fonts.gstatic.com"/>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&subset=latin,cyrillic"
    rel="stylesheet"/>
<link 
  rel="stylesheet" 
  href="https://static.tildacdn.info/css/tilda-slds-1.4.min.css" 
  type="text/css" 
  media="all" 
/>

<link 
  rel="stylesheet" 
  href="https://static.tildacdn.info/css/tilda-cards-1.0.min.css" 
  type="text/css" 
  media="all" 
/>

<link 
  rel="stylesheet" 
  href="https://static.tildacdn.info/css/tilda-forms-1.0.min.css" 
  type="text/css" 
  media="all" 
/>

  <script noModule src="https://static.tildacdn.info/js/tilda-polyfill-1.0.min.js" charSet="utf-8"></script>
  <script 
  src="https://static.tildacdn.info/js/tilda-scripts-3.0.min.js" 
  charSet="utf-8" 
  defer
></script>

<script 
  src="https://static.tildacdn.info/ws/project12523689/tilda-blocks-page65016175.min.js?t=1742022174" 
  charSet="utf-8" 
  defer
></script>

<script 
  src="https://static.tildacdn.info/js/tilda-lazyload-1.0.min.js" 
  charSet="utf-8" 
  defer
></script>


  <script src="https://static.tildacdn.info/js/tilda-menu-1.0.min.js" charSet="utf-8" async></script>
  <script src="https://static.tildacdn.info/js/tilda-zero-1.1.min.js" charSet="utf-8" async></script>
  <script src="https://static.tildacdn.info/js/tilda-slds-1.4.min.js" charSet="utf-8" async></script>
  <script src="https://static.tildacdn.info/js/hammer.min.js" charSet="utf-8" async></script>
  <script src="https://static.tildacdn.info/js/tilda-paint-icons.min.js" charSet="utf-8" async></script>
  <script src="https://static.tildacdn.info/js/tilda-cards-1.0.min.js" charSet="utf-8" async></script>
  <script src="https://static.tildacdn.info/js/tilda-forms-1.0.min.js" charSet="utf-8" async></script>
  <script src="https://static.tildacdn.info/js/tilda-zero-forms-1.0.min.js" charSet="utf-8" async></script>
  <script src="https://static.tildacdn.info/js/tilda-zero-scale-1.0.min.js" charSet="utf-8" async></script>
  <script src="https://static.tildacdn.info/js/tilda-zero-video-1.0.min.js" charSet="utf-8" async></script>
  <script src="https://static.tildacdn.info/js/tilda-skiplink-1.0.min.js" charSet="utf-8" async></script>
  <script src="https://static.tildacdn.info/js/tilda-events-1.0.min.js" charSet="utf-8" async></script>
    </head>
      <body className="t-body" style={{marginRight: 0}}>
      <div id="allrecords" className="t-records" data-hook="blocks-collection-content-node" data-tilda-project-id="12523689"
        data-tilda-page-id="65016175" data-tilda-formskey="2db38b6a1d8fa78fb96f4f2e12523689" data-tilda-cookie="no"
        data-tilda-lazy="yes" data-tilda-root-zone="one">
        {children}
        </div>
      </body>
    </html>
  );
}
