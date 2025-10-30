<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/1999/xhtml"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #333;
            max-width: 1200px;
            margin: 40px auto;
            padding: 20px;
            background: #f5f5f5;
          }
          h1 {
            font-size: 2em;
            margin-bottom: 10px;
            color: #2c3e50;
          }
          .intro {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            border-left: 4px solid #3498db;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: #fff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          th {
            background: #3498db;
            color: white;
            text-align: left;
            padding: 15px;
            font-weight: 600;
          }
          td {
            padding: 12px 15px;
            border-bottom: 1px solid #ecf0f1;
          }
          tr:hover {
            background: #f8f9fa;
          }
          a {
            color: #3498db;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .url-cell {
            max-width: 500px;
            word-break: break-all;
          }
          .count {
            color: #7f8c8d;
            font-size: 0.9em;
          }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <div class="intro">
          <p>This is an XML Sitemap for search engines like Google, Bing, and Yahoo.</p>
          <p class="count">
            <strong>Number of URLs: </strong>
            <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
          </p>
        </div>
        <table>
          <tr>
            <th style="width: 60%;">URL</th>
            <th style="width: 20%;">Last Modified</th>
            <th style="width: 10%;">Change Freq</th>
            <th style="width: 10%;">Priority</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td class="url-cell">
                <a href="{sitemap:loc}">
                  <xsl:value-of select="sitemap:loc"/>
                </a>
              </td>
              <td>
                <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
              </td>
              <td>
                <xsl:value-of select="sitemap:changefreq"/>
              </td>
              <td>
                <xsl:value-of select="sitemap:priority"/>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>