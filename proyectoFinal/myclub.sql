-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-06-2023 a las 17:06:47
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `myclub`
--
CREATE DATABASE IF NOT EXISTS `myclub` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `myclub`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE `actividades` (
  `id_a` int(11) NOT NULL,
  `creador_id` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `lugar` varchar(100) NOT NULL,
  `curso` varchar(5) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descripcion` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `actividades`
--

INSERT INTO `actividades` (`id_a`, `creador_id`, `fecha`, `lugar`, `curso`, `titulo`, `descripcion`) VALUES
(13, 1, '2023-05-16 10:18:42', 'alguno', '4epo', 'titulo', 'algo'),
(16, 1, '2023-05-09 18:00:00', 'leon', '4epo', 'leon', 'leon'),
(18, 1, '2023-05-08 18:00:00', 'leon', '4epo', 'cocina', 'monters chef'),
(19, 1, '2023-05-26 18:30:00', 'leon', '6epo', 'futbol poli', 'algo'),
(20, 1, '2023-05-20 10:00:00', 'gradefes', '2eso', 'multideporte', 'leon'),
(21, 1, '2023-05-01 10:00:00', 'leon', '4epo', 'musica', 'tocamos guitarra'),
(22, 1, '2023-05-02 12:00:00', 'leon', '4epo', 'juegos', 'búsqueda del tesoro'),
(23, 1, '2023-05-03 10:00:00', 'leon', '4epo', 'padel', 'algo'),
(24, 1, '2023-05-04 16:00:00', 'leon', '6epo', 'programación', 'se realizara un curso de scrach');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admins`
--

CREATE TABLE `admins` (
  `id_a` int(11) NOT NULL,
  `nomUsu` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `admins`
--

INSERT INTO `admins` (`id_a`, `nomUsu`, `pass`, `nombre`) VALUES
(1, 'admin', 'admin', 'Alejandro rodrigues cámpelo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lista`
--

CREATE TABLE `lista` (
  `id_l` int(11) NOT NULL,
  `id_a` int(11) NOT NULL,
  `id_s` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `monitor`
--

CREATE TABLE `monitor` (
  `id_m` int(11) NOT NULL,
  `nomUsu` varchar(50) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido1` varchar(50) NOT NULL,
  `apellido2` varchar(50) NOT NULL,
  `tlf` varchar(9) NOT NULL,
  `curso` varchar(5) NOT NULL,
  `carne_conducir` tinyint(1) NOT NULL,
  `titulo_monitor` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `monitor`
--

INSERT INTO `monitor` (`id_m`, `nomUsu`, `pass`, `nombre`, `apellido1`, `apellido2`, `tlf`, `curso`, `carne_conducir`, `titulo_monitor`) VALUES
(1, 'alex', 'alex', 'alejandro', 'rodriguez', 'campelo', '658470620', '4epo', 1, 0),
(5, '2', '2', '2', '2', '2', '4epo ', '66677', 0, 0),
(6, '2', '2', '2', '2', '2', '4epo ', '66677', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `socios`
--

CREATE TABLE `socios` (
  `id_s` int(11) NOT NULL,
  `nomUsu` varchar(50) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido1` varchar(50) NOT NULL,
  `apellido2` varchar(50) NOT NULL,
  `curso` varchar(4) NOT NULL,
  `nomPadre` varchar(50) NOT NULL,
  `tlfPadre` varchar(9) NOT NULL,
  `nomMadre` varchar(50) NOT NULL,
  `tlfMadre` varchar(9) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `fechaNac` date NOT NULL,
  `observaciones` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `socios`
--

INSERT INTO `socios` (`id_s`, `nomUsu`, `pass`, `nombre`, `apellido1`, `apellido2`, `curso`, `nomPadre`, `tlfPadre`, `nomMadre`, `tlfMadre`, `direccion`, `fechaNac`, `observaciones`) VALUES
(1, 'diegolobo', 'diegolobo', 'diego', 'llorente', 'lobo', '6epo', 'marcos llorente', '999888777', 'sofia lobo', '666111222', 'palomeria 2 3d', '2015-05-20', 'niño calmado'),
(3, '2', '2', '2', '2', '2', '4epo', '2', '2', '2', '2', '2', '0000-00-00', '2'),
(4, '5', '5', '5', '5', '5', '4epo', '5', '5', '5', '5', '5', '2023-05-05', '5'),
(5, '', '', '', '', '', '4epo', '', '', '', '', '', '0000-00-00', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`id_a`);

--
-- Indices de la tabla `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id_a`);

--
-- Indices de la tabla `lista`
--
ALTER TABLE `lista`
  ADD PRIMARY KEY (`id_l`);

--
-- Indices de la tabla `monitor`
--
ALTER TABLE `monitor`
  ADD PRIMARY KEY (`id_m`);

--
-- Indices de la tabla `socios`
--
ALTER TABLE `socios`
  ADD PRIMARY KEY (`id_s`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividades`
--
ALTER TABLE `actividades`
  MODIFY `id_a` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `admins`
--
ALTER TABLE `admins`
  MODIFY `id_a` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `lista`
--
ALTER TABLE `lista`
  MODIFY `id_l` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `monitor`
--
ALTER TABLE `monitor`
  MODIFY `id_m` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `socios`
--
ALTER TABLE `socios`
  MODIFY `id_s` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
