export default function PascalToSentences(pascal: string) {
  return pascal.replace(/[A-Z]/g, ' $&');
}
