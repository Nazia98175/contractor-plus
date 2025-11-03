<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/1999/xhtml"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>
          <xsl:choose>
            <xsl:when test="sitemap:sitemapindex">Sitemap Index</xsl:when>
            <xsl:otherwise>XML Sitemap</xsl:otherwise>
          </xsl:choose>
        </title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            font-size: 14px;
            color: #333;
            margin: 0;
            padding: 0;
            background: #f5f7fa;
          }
          .header {
            background: linear-gradient(135deg, #dc1112 0%, #76090a 100%);
            color: white;
            padding: 30px 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
          }
          h1 {
            margin: 0 0 10px 0;
            font-size: 32px;
            font-weight: 600;
          }
          .intro {
            opacity: 0.95;
            margin: 0;
            line-height: 1.6;
          }
          .stats {
            background: white;
            margin: 30px auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            max-width: 1400px;
          }
          .stats-inner {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .stats-icon {
            font-size: 24px;
          }
          .stats-text {
            color: #dc1112;
            font-weight: 600;
            font-size: 16px;
          }
          .content {
            background: white;
            margin: 0 auto 30px;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            max-width: 1400px;
          }
          
          /* For Sitemap Index (Cards) */
          .sitemap-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            gap: 20px;
            margin-top: 20px;
          }
          .sitemap-card {
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 20px;
            transition: all 0.3s ease;
          }
          .sitemap-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(220, 17, 18, 0.15);
            border-color: #dc1112;
          }
          .sitemap-card a {
            color: #dc1112;
            text-decoration: none;
            font-weight: 600;
            font-size: 15px;
            display: block;
            margin-bottom: 8px;
            word-break: break-all;
          }
          .sitemap-card a:hover {
            color: #76090a;
          }
          .sitemap-meta {
            color: #6b7280;
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 5px;
          }
          
          /* For URL List (Table) */
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th {
            background: #dc1112;
            color: white;
            text-align: left;
            padding: 14px;
            font-weight: 600;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          tr {
            border-bottom: 1px solid #e5e7eb;
          }
          tbody tr:hover {
            background: #f9fafb;
          }
          td {
            padding: 14px;
            vertical-align: middle;
          }
          table a {
            color: #dc1112;
            text-decoration: none;
            word-break: break-word;
          }
          table a:hover {
            text-decoration: underline;
            color: #76090a;
          }
          .url-cell {
            max-width: 600px;
            font-size: 13px;
          }
          .priority {
            text-align: center;
            font-weight: 600;
            color: #059669;
          }
          .changefreq {
            text-align: center;
            text-transform: capitalize;
            color: #7c3aed;
            font-weight: 500;
          }
          .lastmod {
            white-space: nowrap;
            color: #6b7280;
            font-size: 12px;
            text-align: center;
          }
          
          .footer {
            text-align: center;
            padding: 20px;
            color: #6b7280;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="container">
            <h1>
              <xsl:choose>
                <xsl:when test="sitemap:sitemapindex">📑 Sitemap Index</xsl:when>
                <xsl:otherwise>🗺️ XML Sitemap</xsl:otherwise>
              </xsl:choose>
            </h1>
            <p class="intro">
              <xsl:choose>
                <xsl:when test="sitemap:sitemapindex">
                  This is the main sitemap index containing links to all sub-sitemaps for this website.
                </xsl:when>
                <xsl:otherwise>
                  This sitemap contains all URLs for this website and is optimized for search engines.
                </xsl:otherwise>
              </xsl:choose>
            </p>
          </div>
        </div>
        
        <div class="container">
          <div class="stats">
            <div class="stats-inner">
              <span class="stats-icon">📊</span>
              <span class="stats-text">
                <xsl:choose>
                  <xsl:when test="sitemap:sitemapindex">
                    Total Sitemaps: <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/>
                  </xsl:when>
                  <xsl:otherwise>
                    Total URLs: <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
                  </xsl:otherwise>
                </xsl:choose>
              </span>
            </div>
          </div>
          
          <div class="content">
            <!-- Sitemap Index Layout (Cards) -->
            <xsl:if test="sitemap:sitemapindex">
              <div class="sitemap-list">
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <div class="sitemap-card">
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                    <div class="sitemap-meta">
                      <span>📅</span>
                      <span>Last updated: <xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/></span>
                    </div>
                  </div>
                </xsl:for-each>
              </div>
            </xsl:if>
            
            <!-- URL Set Layout (Table) -->
            <xsl:if test="sitemap:urlset">
              <table>
                <thead>
                  <tr>
                    <th style="width: 60%;">URL</th>
                    <th style="width: 10%;">Priority</th>
                    <th style="width: 15%;">Change Frequency</th>
                    <th style="width: 15%;">Last Modified</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:urlset/sitemap:url">
                    <tr>
                      <td class="url-cell">
                        <a href="{sitemap:loc}">
                          <xsl:value-of select="sitemap:loc"/>
                        </a>
                      </td>
                      <td class="priority">
                        <xsl:value-of select="sitemap:priority"/>
                      </td>
                      <td class="changefreq">
                        <xsl:value-of select="sitemap:changefreq"/>
                      </td>
                      <td class="lastmod">
                        <xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:if>
          </div>
        </div>
        
        <div class="footer">
          Generated by Contractor+ | Last updated: 
          <xsl:choose>
            <xsl:when test="sitemap:sitemapindex">
              <xsl:value-of select="substring(sitemap:sitemapindex/sitemap:sitemap[1]/sitemap:lastmod, 1, 10)"/>
            </xsl:when>
            <xsl:otherwise>
              <xsl:value-of select="substring(sitemap:urlset/sitemap:url[1]/sitemap:lastmod, 1, 10)"/>
            </xsl:otherwise>
          </xsl:choose>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>