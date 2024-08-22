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
    },
    pagination: {
      limit: 50,
    },
  });
  return await fetchData(url.href);
}

export async function getSubServiceBySlug(slug: string) {
  const url = new URL(`/api/sub-service-pages/${slug}`, baseUrl);
  url.search = qs.stringify({
    populate: {
      cardsdata: {
        populate: "*",
      },
      introImage: {
        fields: ["name", "url", "alternativeText"],
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
        fields: ["name", "url", "alternativeText"],
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
        fields: ["name", "url", "alternativeText"],
      },
      InsightTags: {
        populate: true,
      },
    },
  });

  return await fetchData(url.href);
}

export const getIndustries = async () => {
  const url = new URL("/api/");
};
