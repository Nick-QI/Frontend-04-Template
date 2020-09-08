function kmp(source, pattern) {
  let len = pattern.length
  let table = new Array(len).fill(0)

  // 先生成 匹配串, 前缀和后缀 相同字段的数量
  {
    let i = 1  // 自重复串开始的位置
    let j = 0 // 已重复的字数

    while (i < len) {
      console.log(i, j, pattern[j], pattern[i])
      if (pattern[j] === pattern[i]) {
        ++i
        ++j
        table[i] = j
      } else {
        // 当前位置未匹配上,且之前j 已经匹配上一次及以上,需要将其重置为上一次的结果,然后重新 从i位置开始匹配,进入 else 分支 跳入下一轮循环
        if (j > 0) {
          j = table[j]
        } else {
          // 进入下一次匹配
          ++i
        }
      }
    }
    console.log(table)
  }

  {
    let i = 0 // pattern 位置
    let j = 0 // source 位置

    while (i < source.length) {
      if (pattern[j] === source[i]) {
        ++i
        ++j
      } else {
        if (j > 0) {
          j = table[j]
        } else {
          ++i
        }
      }
      // pattern 串计算到头
      if (j === pattern.length) {
        return true
      }
    }
    // source串到头 
    return false
  }
}



console.log(kmp('abababc', 'abaac'))

/*
"部分匹配值"就是"前缀"和"后缀"的最长的共有元素的长度。以"ABCDABD"为例，

－　"A"的前缀和后缀都为空集，共有元素的长度为0；

－　"AB"的前缀为[A]，后缀为[B]，共有元素的长度为0；

－　"ABC"的前缀为[A, AB]，后缀为[BC, C]，共有元素的长度0；

－　"ABCD"的前缀为[A, AB, ABC]，后缀为[BCD, CD, D]，共有元素的长度为0；

－　"ABCDA"的前缀为[A, AB, ABC, ABCD]，后缀为[BCDA, CDA, DA, A]，共有元素为"A"，长度为1；

－　"ABCDAB"的前缀为[A, AB, ABC, ABCD, ABCDA]，后缀为[BCDAB, CDAB, DAB, AB, B]，共有元素为"AB"，长度为2；

－　"ABCDABD"的前缀为[A, AB, ABC, ABCD, ABCDA, ABCDAB]，后缀为[BCDABD, CDABD, DABD, ABD, BD, D]，共有元素的长度为0。 */