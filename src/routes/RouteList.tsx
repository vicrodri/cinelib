import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import {MovieList, MovieDetail, MovieSearch, ErrorPage} from "../pages"

export const RouteList:FC = () => {
    return (
        <div className="dark:bg-slate-800">
            <Routes>
                <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home"/>}/>
                <Route path="/movie/:id" element={<MovieDetail />}/>
                <Route path="/movie/popular" element={<MovieList apiPath="movie/popular" title="Popular"/>}/>
                <Route path="/movie/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated"/>}/>
                <Route path="/movie/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming"/>}/>
                <Route path="/search" element={<MovieSearch apiPath="search/movie" />}/>
                <Route path="*" element={<ErrorPage title="Page Not Found"/>}/>
            </Routes>
        </div>
    )
}