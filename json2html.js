
export default function json2html(data) {

    const headers = new Set();
    data.forEach(item => Object.keys(item).forEach(key => headers.add(key)));

    const headersArray = Array.from(headers);

    let html = '<table data-user="suprabhat0815@gmail.com">';

    html += '<thead><tr>';
    headersArray.forEach(header => {
        html += <th>${header}</th>;
    });
    html += '</tr></thead>';

    html += '<tbody>';
    data.forEach(row => {
        html += '<tr>';
        headersArray.forEach(header => {
            html += <td>${row[header] !== undefined ? row[header] : ''}</td>;
        });
        html += '</tr>';
    });
    html += '</tbody></table>';

    return html;
}