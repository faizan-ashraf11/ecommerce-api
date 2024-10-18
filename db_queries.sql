CREATE DATABASE ecommerce;
USE ecommerce;

CREATE TABLE products (
    productId INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
    productName VARCHAR(255) NOT NULL,
    primaryPic LONGTEXT,
    pic1 LONGTEXT,
    pic2 LONGTEXT,
    pic3 LONGTEXT,
    pic4 LONGTEXT,
    pic5 LONGTEXT,
    price VARCHAR(50),
    quantity VARCHAR(50)
);

CREATE TABLE cart (
    cartId INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
    productId INT NOT NULL,
    userId INT NOT NULL,
    FOREIGN KEY (productId) REFERENCES products(productId),
    FOREIGN KEY (userId) REFERENCES users(userId)
);

CREATE TABLE favorites (
    favoriteId INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
    productId INT NOT NULL,
    userId INT NOT NULL,
    FOREIGN KEY (productId) REFERENCES products(productId),
    FOREIGN KEY (userId) REFERENCES users(userId)
);

CREATE TABLE users (
    userId INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
    userName VARCHAR(255) NOT NULL,
    userPic LONGTEXT,
    login VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);
