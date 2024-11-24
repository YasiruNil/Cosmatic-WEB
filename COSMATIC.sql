CREATE SCHEMA IF NOT EXISTS `cosmaticDB`;
USE cosmaticDB;

CREATE TABLE Category (
 categoryID INT AUTO_INCREMENT PRIMARY KEY,
 category_name VARCHAR(50)
);

CREATE TABLE Brand (
 brandID INT AUTO_INCREMENT PRIMARY KEY,
 brand_name VARCHAR(50)
);

CREATE TABLE Product (
 productID INT AUTO_INCREMENT PRIMARY KEY,
 product_name VARCHAR(50),
 quantity INT,
 price DECIMAL,
 image VARCHAR(300),
 brandID INT,
 categoryID INT,
 CONSTRAINT FK_BrandID FOREIGN KEY (brandID) REFERENCES Brand(brandID),
 CONSTRAINT FK_categoryID FOREIGN KEY (categoryID) REFERENCES Category(categoryID)
);

CREATE TABLE ProductDetails (
 productDetailsID INT AUTO_INCREMENT PRIMARY KEY,
 product_description VARCHAR(500),
 expiry_date DATETIME,
 usage_instructions varchar(500),
 productID INT,
 CONSTRAINT FK_productID FOREIGN KEY (productID) REFERENCES Product(productID)
);

INSERT INTO Category VALUES (1,'Perfumes');
INSERT INTO Brand VALUES (1,'viana');
INSERT INTO Brand VALUES (2,'spa ceylon');
INSERT INTO Product VALUES (1,'Red Perfume',50,100,'v1732340542/perfume_01.png',1,1);
INSERT INTO Product VALUES (2,'Black Sakura',20,400,'v1732340540/perfume_02.png',1,1);
INSERT INTO Product VALUES (3,'Blue Ice',50,140,'v1732340158/perfume_03.png',2,1);
INSERT INTO Product VALUES (4,'White Bloom',50,180,'v1732340159/perfume_04.png',2,1);
INSERT INTO Product VALUES (5,'Black Forest',10,190,'v1732340159/perfume_05.png',1,1);
INSERT INTO ProductDetails VALUES (1,'Explore the Secret Beaches of Mirissa with this exotic tropical fragrance, reminiscent of an island escape to the wondrous sun-kissed beaches of Ceylon',NULL,'Spray-on all over body, for lasting freshness. Caution: Avoid Eye Contact. Do not apply on broken / irritated skin.',1);
INSERT INTO ProductDetails VALUES (2,'Explore the Secret Beaches of Mirissa with this exotic tropical fragrance, reminiscent of an island escape to the wondrous sun-kissed beaches of Ceylon',NULL,'Spray-on all over body, for lasting freshness. Caution: Avoid Eye Contact. Do not apply on broken / irritated skin.',2);
INSERT INTO ProductDetails VALUES (3,'Explore the Secret Beaches of Mirissa with this exotic tropical fragrance, reminiscent of an island escape to the wondrous sun-kissed beaches of Ceylon',NULL,'Spray-on all over body, for lasting freshness. Caution: Avoid Eye Contact. Do not apply on broken / irritated skin.',3);
INSERT INTO ProductDetails VALUES (4,'Explore the Secret Beaches of Mirissa with this exotic tropical fragrance, reminiscent of an island escape to the wondrous sun-kissed beaches of Ceylon',NULL,'Spray-on all over body, for lasting freshness. Caution: Avoid Eye Contact. Do not apply on broken / irritated skin.',4);
INSERT INTO ProductDetails VALUES (5,'Explore the Secret Beaches of Mirissa with this exotic tropical fragrance, reminiscent of an island escape to the wondrous sun-kissed beaches of Ceylon',NULL,'Spray-on all over body, for lasting freshness. Caution: Avoid Eye Contact. Do not apply on broken / irritated skin.',5);