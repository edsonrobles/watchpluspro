import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Meta ( {
    title, keywords, description, image, category, domain, miniature, username, facebook, twitter
} ) {
    return (
        <Helmet>
            <title>{title}</title>

            {/* optimizaciĂłn de SEO */}
            <meta name="robots"                       content="index, follow" />
            <meta name="generator"                    content="Visual Studio Code" />
            <meta name="resource"                     content="document" />
            <meta name="author"                       content={title} />
            <meta name="keywords"                     content={keywords} />
            <meta name="description"                  content={description} />
            <meta name="http-equiv='content-language" content="es-NI" />
            <meta name="http-equiv='cache-control"    content="public" />
            <meta name="http-equiv='content-type"     content="text/html; charset=UTF-8" />

            <meta property="fancy:name"               content={title} />
            <meta property="fancy:image"              content={image} />
            <meta property="fancy:category"           content={category} />
            <meta property="fancy:description"        content={description} />

            <link ref="canonical"                     href={domain} />
            <meta property="og:url"                   content={domain} />

            {/* facebook */}
            <meta property="og:type"                  content="website" />
            <meta property="og:image"                 content={miniature} />
            <meta property="facebook:site"            content={username} />
            <meta property="og:locale"                content="es_ES" />
            <meta property="facebook:creator"         content={username} />
            <meta property="og:description"           content={facebook} />

            {/* twitter */}
            <meta name="twitter:card"                 content="summary_large_image" />
            <meta name="twitter:site"                 content={username} />
            <meta name="twitter:image"                content={miniature} />
            <meta name="twitter:title"                content={title} />
            <meta name="twitter:creator"              content={username} />
            <meta name="twitter:twitter"              content={twitter} />

            <meta property="og:url"                   content={domain} />
            <meta property="og:type"                  content="article" />
            <meta property="og:image"                 content={miniature} />
            <meta property="og:title"                 content={title} />
            <meta property="og:site_name"             content={title} />
            <meta property="og:description"           content={description} />
            <meta property="og:price:amount"          content="" />
            <meta property="og:price;currency"        content="NIO, USD" />

        </Helmet>
    )
}
