import qs from "qs";
import { flattenAttributes, getStrapiURL } from "@/lib/utils";

const baseUrl = getStrapiURL();

async function fetchData(url: string) {
  try {
    const response = await fetch(url, {
      next: { revalidate: 1000 },
    });
    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getSubServicePage() {
  const url = new URL("/api/sub-service-pages", baseUrl);
  url.search = qs.stringify({
    populate: {
      fields: ["id", "slug", "navtitle", "servicetype"],
      cardicon: {
        populate: ["width", "height", "url", "alternativeText"],
      },
    },
    pagination: {
      limit: 50,
    },
  });
  return await fetchData(url.href);
}

export async function getAllSubServicePages() {
  let allSubServicePages: any[] = [];
  let hasMorePages = true;
  let page = 1;
  const pageSize = 24;

  while (hasMorePages) {
    const url = new URL("/api/sub-service-pages", baseUrl);
    url.search = qs.stringify({
      populate: {
        fields: ["id", "slug", "navtitle", "servicetype"],
        cardicon: {
          populate: ["width", "height", "url", "alternativeText"],
        },
      },
      pagination: {
        page,
        pageSize,
      },
    });

    const { data, meta } = await fetchData(url.href);

    allSubServicePages = [...allSubServicePages, ...data];
    hasMorePages = data.length === pageSize;
    page += 1;
  }

  return allSubServicePages;
}

export async function getSubServiceBySlug(slug: string) {
  const url = new URL(`/api/sub-service-pages/${slug}`, baseUrl);
  url.search = qs.stringify({
    populate: {
      cardsdata: {
        populate: "*",
      },
      introImage: {
        populate: ["width", "height", "url", "alternativeText"],
      },
    },
  });

  return await fetchData(url.href);
}

export async function getInsights() {
  const url = new URL("/api/insights", baseUrl);
  url.search = qs.stringify({
    populate: {
      CardImage: {
        populate: ["width", "height", "url", "alternativeText"],
      },
      InsightTags: {
        populate: true,
      },
    },
  });

  return await fetchData(url.href);
}

export async function getInsightsBySlug(slug: string) {
  const url = new URL(`/api/insights/${slug}`, baseUrl);
  url.search = qs.stringify({
    populate: {
      CardImage: {
        populate: ["width", "height", "url", "alternativeText"],
      },
      InsightTags: {
        populate: true,
      },
    },
  });

  return await fetchData(url.href);
}

export const getIndustries = async () => {
  const url = new URL("/api/industries", baseUrl);

  url.search = qs.stringify({
    populate: {
      cardicon: {
        populate: ["width", "height", "url", "alternativeText"],
      },
    },
  });

  return await fetchData(url.href);
};

export const getAllIndustries = async () => {
  let allIndustryPages: any[] = [];
  let hasMorePages = true;
  let page = 1;
  const pageSize = 24;

  while (hasMorePages) {
    const url = new URL("/api/industries", baseUrl);
    url.search = qs.stringify({
      populate: {
        cardicon: {
          populate: ["width", "height", "url", "alternativeText"],
        },
      },
      pagination: {
        page,
        pageSize,
      },
    });

    const { data, meta } = await fetchData(url.href);

    allIndustryPages = [...allIndustryPages, ...data];
    hasMorePages = data.length === pageSize;
    page += 1;
  }

  return allIndustryPages;
};

export const getIndustryBySlug = async (slug: string) => {
  const url = new URL(`/api/industries/${slug}`, baseUrl);

  url.search = qs.stringify({
    populate: {
      cardsdata: {
        populate: {
          faqitem: { populate: true },
          description: { populate: true },
        },
      },
      introImage: {
        populate: ["width", "height", "url", "alternativeText"],
      },
    },
  });

  return await fetchData(url.href);
};
