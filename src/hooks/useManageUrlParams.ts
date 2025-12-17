import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IUseManageUrlParams {
  paramName: string;
  scroll?: boolean;
}

export const useManageUrlParams = ({
  paramName,
  scroll = true,
}: IUseManageUrlParams) => {
  const searchParams = useSearchParams();
  const currentPathName = usePathname();

  const router = useRouter();

  const currentValueParams = searchParams.get(paramName);

  const currentUrlParams = new URLSearchParams(searchParams);

  const setUrlParams = (value: string) => {
    currentUrlParams.set(paramName, value);
  };

  const setAndPushUrlParams = (value: string) => {
    setUrlParams(value);

    router.push(`${currentPathName}?${currentUrlParams.toString()}`, {
      scroll,
    });
  };

  return { currentValueParams, setAndPushUrlParams };
};
