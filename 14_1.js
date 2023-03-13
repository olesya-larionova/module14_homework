const parser = new DOMParser();

const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNodes = listNode.querySelectorAll("student");
const list = new Array;
for (const studentNode of studentNodes) {
  const nameNode = studentNode.querySelector("name");
  const student = {
    name: nameNode.querySelector("first").textContent + " " + nameNode.querySelector("second").textContent,
    age: +studentNode.querySelector("age").textContent,
    prof: studentNode.querySelector("prof").textContent,
    lang: nameNode.getAttribute('lang')
  }
  list.push(student);
}

const list1 = {
  list: list
}

console.log(list1);

