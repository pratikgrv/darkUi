
export function slugify(str: string) {
    return str
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
  }
  
  export function getResponsiveContainerWidth(
		documentWidth: number,
		windowWidth: number
	) {
		if (windowWidth < 768) {
			return documentWidth - 16 * 2;
		}

		if (windowWidth < 1024) {
			return documentWidth - 48 * 2;
		}

		return Math.min(documentWidth - 64 * 2, 1800 - 64 * 2);
	}
