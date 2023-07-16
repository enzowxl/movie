import React, {
  ReactNode,
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

interface Props {
  children: ReactNode;
}

interface MovieProps {
  time: string;
  language: string;
  page: number;
  updateTime: Dispatch<SetStateAction<string>>;
  updateLanguage: Dispatch<SetStateAction<string>>;
  updatePage: Dispatch<SetStateAction<number>>;
}

export const MovieContext = createContext<MovieProps>({
  time: "day",
  language: "en-US",
  page: 1,
  updateTime: () => {},
  updateLanguage: () => {},
  updatePage: () => {},
});

export default function MovieProvider({ children }: Props) {
  const [time, updateTime] = useState("day");
  const [language, updateLanguage] = useState("en-US");
  const [page, updatePage] = useState(1);

  return (
    <MovieContext.Provider
      value={{
        time,
        language,
        page,
        updateTime,
        updateLanguage,
        updatePage,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
