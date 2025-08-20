export function cn(...args: Array<string | undefined | null | boolean | 0 | 0n>): string {
  return args.filter(Boolean).join(" ");
}
