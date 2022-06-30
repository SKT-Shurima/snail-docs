### 常用命令

- 创建表

  ```sql
  CREATE TABLE dept(
  	depto INT PRIMARY KEY,
    dname VARCHAR(9),
    sex CHAR(2),
    age INT,
   	createTime DATE,
    salary numeric(7,2)
  )
  ```

- 插入表

  ```sql
  INSERT INTO dept2 VALUES(1,"zhangsan","男",18,"2004-11-30",22001.09)
  ```

  