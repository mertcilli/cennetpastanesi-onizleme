self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/cennetpastanesi-onizleme(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!api|_next|admin|assets|favicon.ico|icon|apple-icon|manifest.webmanifest|robots.txt|sitemap.xml|opengraph-image|.*\\.).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!api|_next|admin|assets|favicon.ico|icon|apple-icon|manifest.webmanifest|robots.txt|sitemap.xml|opengraph-image|.*\\.).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()