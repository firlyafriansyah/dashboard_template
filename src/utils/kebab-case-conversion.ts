export default function KebabCaseConversion(value: string) {
  return (
    value
    && value
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
      )
      .map((x: string) => x.toLowerCase())
      .join('-')
  );
}
