-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-03-2022 a las 10:41:04
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inventario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` bigint(20) NOT NULL,
  `categoria` varchar(255) DEFAULT NULL,
  `date` varchar(255) NOT NULL DEFAULT current_timestamp(),
  `nombre` varchar(255) DEFAULT NULL,
  `peso` int(11) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `referencia` varchar(255) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `ventas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `categoria`, `date`, `nombre`, `peso`, `precio`, `referencia`, `stock`, `ventas`) VALUES
(6, 'ddd', '', 'Yuca', 23, 3000, 'dwewew', 8, 4),
(7, 'test', '', 'Papa', 8878, 7767, 'asasas', 0, 1),
(8, 'Prueba', '', 'Pepinillo', 3232, 712323, 'wewewe', 9, 7),
(12, 'Categoria3', '', 'Ajo', 345, 232, 'ererer', 18, 0),
(14, 'Cate45', '', 'Yogur', 232, 1212, 'wrererere', 119, 2),
(16, 'wewe', '', 'Leche', 233, 2323, '32323', 2318, 5),
(17, 'sdswe', '', 'Perenjil', 343, 323, 'rererer', 2313, 0),
(19, 'ewe', '', 'Wfer', 3232, 232, 'wewewe', 0, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id` bigint(20) NOT NULL,
  `categoria` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `peso` int(11) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `referencia` varchar(255) DEFAULT NULL,
  `ventas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
