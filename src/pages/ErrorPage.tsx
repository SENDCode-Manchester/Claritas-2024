import {ErrorResponse, useRouteError} from "react-router-dom";
import {PageHeader} from "../components/PageHeader.tsx";
import {Footer} from "../components/nav/Footer.tsx";

export function ErrorPage() {
  const error = useRouteError() as ErrorResponse;

  return (
    <>
      <PageHeader $backgroundImage={"/assets/images/pagehead_error.webp"} $title={`${error.status} - ${error.statusText}`} $darken={true} />
      <Footer $bottom={true} />
    </>
  );
}
