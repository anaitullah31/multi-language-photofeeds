import PageDetails from "@/app/components/PageDetails";

const PhotoDetailsPage = async ({ params }) => {
  const { id, lang } = await params;
  return <PageDetails id={id} lang={lang} />;
};

export default PhotoDetailsPage;
