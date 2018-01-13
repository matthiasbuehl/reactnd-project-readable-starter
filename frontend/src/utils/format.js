export function dateFromTimestamp(timestamp) {
  if (! timestamp) return ''

  return (new Date(timestamp)).toDateString()
}