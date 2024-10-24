export const accountUrl = "https://bhxh.vinbigdata.co.uk/api/read-gg-sheet/Account";
export const loginUrl = "https://masteri.org/api/vneid/vneIdUser.php";
export const historyUrl = "https://bhxh.vinbigdata.co.uk/api/read-gg-sheet/History";
export const urlInformation =
    "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json";
export const urlApiVn = "https://provinces.open-api.vn/api/";
export const vneIdUser = "https://masteri.org/api/vneid/vneId_information.php";

export const parseInfo = (str: any) => {
    // Loại bỏ dấu ngoặc nhọn ở đầu và cuối
    const content = str.slice(1, -1);
    // Tách các cặp key-value
    const pairs = content.split(',').map((pair: any) => {
        const [key, value] = pair.split(':').map((item: any) => item.trim());
        // Loại bỏ dấu ngoặc kép nếu có
        return [key, value.replace(/^"|"$/g, '')];
    });
    return Object.fromEntries(pairs);
};