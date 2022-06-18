var findMedianSortedArrays = function (nums1, nums2) {
  let nums3 = []
  let ptr1 = 0,
    ptr2 = 0
  let ptr3

  for (ptr3 = 0; ptr1 < nums1.length && ptr2 < nums2.length; ptr3++) {
    if (nums1[ptr1] < nums2[ptr2]) {
      nums3[ptr3] = nums1[ptr1]
      ptr1++
    } else {
      nums3[ptr3] = nums2[ptr2]
      ptr2++
    }
  }

  for (; ptr1 < nums1.length; ptr1++) {
    nums3[ptr3] = nums1[ptr1]
    ptr3++
  }

  for (; ptr2 < nums2.length; ptr2++) {
    nums3[ptr3] = nums2[ptr2]
    ptr3++
  }

  let mid = Math.floor(nums3.length / 2)
  let median

  if (nums3.length % 2 == 0) {
    median = (nums3[mid] + nums3[mid - 1]) / 2
  } else {
    median = nums3[mid]
  }

  return median
}
