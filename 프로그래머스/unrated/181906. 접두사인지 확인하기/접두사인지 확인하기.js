function solution(my_string, is_prefix) {
    // let regexp = new RegExp(`^${is_prefix}`);
    // return regexp.test(my_string) ? 1 : 0;
    return my_string.startsWith(is_prefix) ? 1 : 0;
}