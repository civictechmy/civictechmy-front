import { withi18n } from "@/lib/decorator";
import { Page } from "@/lib/types";
import { ClockIcon } from "@govtechmy/myds-react/icon";
import { GetStaticProps } from "next";

const Home: Page = () => {
  return (
    <>
      {process.env.NEXT_PUBLIC_APP_ENV === "production" ? (
        <div
          className="flex w-full flex-1 items-center justify-center bg-white dark:bg-black"
          style={{ minHeight: "calc(40vh)" }}
        >
          <span className="text-gray-800 dark:text-gray-100 flex items-center gap-2 text-3xl font-bold">
            <ClockIcon className="h-5 w-5" /> Coming Soon
          </span>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          Staging
        </div>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = withi18n(["home"], async () => {
  try {
    return {
      notFound: false,
      props: {
        meta: {
          id: "home",
          type: "misc",
        },
      },
    };
  } catch (error: any) {
    console.error(error.message);
    return { notFound: true };
  }
});

export default Home;
