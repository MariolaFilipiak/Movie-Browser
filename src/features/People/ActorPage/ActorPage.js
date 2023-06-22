import { useDispatch, useSelector } from "react-redux";
import { fetchActor, selectActor, selectActorStatus } from "./actorSlice";
import { NoResult } from "../../Content/NoResult";
import { Loading } from "../../Content/Loading";
import { ActorInfo } from "./index";
import { Error } from "../../Content/Error";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import searchQueryParamName from "../../NavigationBar/SearchBar/searchQueryParamName";
import { useFetchPeople } from "../useFetchPeople";
import { People } from "../People";

export const ActorPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const actor = useSelector(selectActor(id));
  const status = useSelector(selectActorStatus);
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search || "").get(
    searchQueryParamName
  );
  useFetchPeople({ dispatch, query, setSearchResults });
  useEffect(() => {
    dispatch(fetchActor(id, query));
  }, [dispatch, id, query]);

  return {
    initial: null,
    loading: <Loading />,
    success: (
      <>
      {query ? (
        <People people={searchResults} />
      ) : (
        <ActorInfo actorInfo={actor} />
      )}
    </>
  ),
    error: <Error />,
    noResult:<NoResult />
  }[status];
};
