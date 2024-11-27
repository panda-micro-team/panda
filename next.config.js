/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Для статичної генерації
  basePath: "/panda", // Задайте базовий шлях, що відповідає репозиторію
  trailingSlash: true, // Додає слеш до кінця URL
};

module.exports = nextConfig;
