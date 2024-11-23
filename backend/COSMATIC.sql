CREATE SCHEMA IF NOT EXISTS `cosmaticDB`;
USE cosmaticDB;

CREATE TABLE Category (
 CategoryID INT AUTO_INCREMENT PRIMARY KEY,
 Name VARCHAR(50)
);

CREATE TABLE Brand (
 BrandID INT AUTO_INCREMENT PRIMARY KEY,
 Name VARCHAR(50)
);

CREATE TABLE Product (
 ProductID INT AUTO_INCREMENT PRIMARY KEY,
 Name VARCHAR(50),
 Quantity INT,
 Price DECIMAL,
 Image VARCHAR(300),
 BrandID INT,
 CategoryID INT,
 CONSTRAINT FK_BrandID FOREIGN KEY (BrandID) REFERENCES Brand(BrandID),
 CONSTRAINT FK_CategoryID FOREIGN KEY (CategoryID) REFERENCES Category(CategoryID)
);

CREATE TABLE ProductDetails (
 ProductDetailsID INT AUTO_INCREMENT PRIMARY KEY,
 Description VARCHAR(500),
 ExpiryDate DATETIME,
 UsageInstructions varchar(500),
 ProductID INT,
 CONSTRAINT FK_ProductID FOREIGN KEY (ProductID) REFERENCES Product(ProductID)
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