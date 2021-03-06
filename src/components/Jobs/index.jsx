import React from 'react';
import useFetch from "../../hooks/useFetch";
import {JOBS} from "../../modules/api/endpoints";
import {useEffect} from 'react';
import Navigation from "../common/Navigation";

export default function Jobs() {

  const {response, performFetch} = useFetch(JOBS);

  const {loading, data} = response;

  useEffect(() => {
    performFetch()
  }, [performFetch]);

  return <Navigation loading={loading} services={data} title={'react + redux + redux-saga app'} />;
}