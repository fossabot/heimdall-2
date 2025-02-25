import { useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import { navigate, routes } from '@redwoodjs/router'

import { allowedLocalesList } from 'src/i18n'
export const useLocaleRedirect = ({ locale }) => {
  const { i18n } = useTranslation()
  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [locale, i18n])
  if (!locale || !allowedLocalesList.includes(locale)) {
    console.warn(
      `Invalid locale '${locale}' detected. Redirecting to default locale.`
    )
    const redirectLocale = allowedLocalesList.includes(navigator.language)
      ? navigator.language
      : 'en-US'
    navigate(routes.home({ locale: redirectLocale }))
  }
}
