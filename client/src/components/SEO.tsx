import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}

export default function SEO({ title, description, keywords, image }: SEOProps) {
  const defaultKeywords = "재생 플라스틱, 친환경 소재, PCR, PIR, 컴파운딩, 탄소중립, ESG 경영, (주)창맥";
  const siteTitle = "(주)창맥 - 순환경제의 리더";
  const defaultImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663320104260/WHIfrcrrUaXEessa.png";

  return (
    <Helmet>
      <title>{title} | {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} | ${siteTitle}`} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="(주)창맥" />
      <meta property="og:image" content={image || defaultImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${siteTitle}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
}
