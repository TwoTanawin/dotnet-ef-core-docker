--
-- PostgreSQL database dump
--

-- Dumped from database version 16.6 (Debian 16.6-1.pgdg120+1)
-- Dumped by pg_dump version 16.6 (Debian 16.6-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Movies; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."Movies" (
    "Id" integer NOT NULL,
    "Title" text NOT NULL,
    "Genre" text NOT NULL,
    "ReleaseDate" timestamp with time zone NOT NULL,
    "Price" numeric NOT NULL
);


ALTER TABLE public."Movies" OWNER TO admin;

--
-- Name: Movies_Id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

ALTER TABLE public."Movies" ALTER COLUMN "Id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."Movies_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: __EFMigrationsHistory; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."__EFMigrationsHistory" (
    "MigrationId" character varying(150) NOT NULL,
    "ProductVersion" character varying(32) NOT NULL
);


ALTER TABLE public."__EFMigrationsHistory" OWNER TO admin;

--
-- Name: Movies PK_Movies; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Movies"
    ADD CONSTRAINT "PK_Movies" PRIMARY KEY ("Id");


--
-- Name: __EFMigrationsHistory PK___EFMigrationsHistory; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."__EFMigrationsHistory"
    ADD CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY ("MigrationId");


--
-- PostgreSQL database dump complete
--
