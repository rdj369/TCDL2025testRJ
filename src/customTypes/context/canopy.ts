import { InternationalString } from "@iiif/presentation-3";

export interface CanopyContextStore {
  config: any;
  headerVisible: boolean;
  iiifContentState: any;
  locale: any;
  searchHeaderFixed: boolean;
  searchParams: URLSearchParams;
  searchSummary?: InternationalString;
}
