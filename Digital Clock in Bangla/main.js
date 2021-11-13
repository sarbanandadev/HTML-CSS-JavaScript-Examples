const enMonths = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর']
const bdMonths = ['বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন', 'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র']
const bdSeasons = ['গ্রীষ্মকাল', 'বর্ষাকাল', 'শরৎকাল', 'হেমন্তকাল', 'শীতকাল', 'বসন্তকাল']
const bdDays = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার']
const bdTotal = [31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30, 30]

const bdDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']

function numConvert(en) {
  let bd = []
  for (let i = 0; i < en.length; ++i) {
    bdDigits.hasOwnProperty(en[i]) ? bd.push(bdDigits[en[i]]) : bd.push(en[i])
  }
  return bd.join('')
}

Number.prototype.pad = function(v) {
  for (var n = this.toString(); n.length < v; n = 0 + n);
  return numConvert(n)
}

Date.prototype.addHours = function(h) {
  this.setHours(this.getHours() + h)
  return this
}

function isLeapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)
}

function dateDiffInDays(a, b) {
  let mspd = 1000 * 60 * 60 * 24 // mspd = milliseconds per day
  let utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())
  let utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())
  return Math.floor((utc2 - utc1) / mspd)
}

function bdDate(getDate) {
  getDate = getDate || new Date().addHours(-6)
  // Day, Date, Month, Year for English Calendar
  let enDay = getDate.getDay(),
    enDate = getDate.getDate(),
    enMonth = getDate.getMonth(),
    enYear = getDate.getFullYear()
  if (isLeapYear(enYear)) {
    bdTotal[10] = 31 // If the given enorian Year is a LeapYear then, the Falgun month enclosed in the enorian year will be 31 days
  }
  // If the given date is smaller than 14th April of current enorian Year
  // 3 is the index of 'April'
  if (enMonth < 3 || (enMonth === 3 && enDate < 14)) {
    enYear = enYear - 1
  }
  let epoch = new Date(enYear + '-04-13')
  let bdYear = enYear - 593
  let remainingDate = dateDiffInDays(epoch, getDate)
  let monthIndex = 0

  for (let i = 0; i < bdMonths.length; i++) {
    if (remainingDate <= bdTotal[i]) {
      monthIndex = i
      break
    }
    remainingDate -= bdTotal[i]
  }

  let bdDate = remainingDate
  let bdSeason = bdSeasons[Math.floor(monthIndex / 2)] // ('পৌষ' + 'মাঘ') = 'শীত'. Every consecutive two index in 'bdMonths' indicates a single index in 'bdSeasons'.

  return {
    getDay() {
      return bdDays[enDay]
    },
    getDate() {
      return bdDate
    },
    getMonth() {
      return bdMonths[monthIndex]
    },
    getYear() {
      return bdYear
    },
    getSeason() {
      return bdSeason
    }

  }
}

let bd = bdDate(),
  bd_wd = bd.getDay(),
  bd_dd = bd.getDate(),
  bd_mm = bd.getMonth(),
  bd_yy = bd.getYear(),
  bd_sea = bd.getSeason()

function digitalClock() {
  let d = new Date(),
    wd = d.getDay(),
    dd = d.getDate(),
    mm = d.getMonth(),
    yy = d.getFullYear(),
    hou = d.getHours(),
    min = d.getMinutes(),
    sec = d.getSeconds(),
    per = hou >= 12 ? 'অপরাহ্ন' : 'পূর্বাহ্ন'

  hou = hou == 0 ? hou = 12 : hou > 12 ? hou - 12 : hou

  let values = [bdDays[wd] + ', ', dd.pad(), enMonths[mm] + ', ', yy.pad(), bd_dd.pad(), bd_mm + ', ', bd_yy.pad() + ', ', bd_sea, hou.pad(2), min.pad(2), sec.pad(2), per]
  let ids = ['day', 'date', 'month', 'year', 'bd_date', 'bd_month', 'bd_year', 'bd_season', 'hour', 'minutes', 'seconds', 'period']
  for (let i = 0; i < ids.length; i++) document.getElementById(ids[i]).firstChild.nodeValue = values[i]
}

(() => {
  digitalClock()
  window.setInterval('digitalClock()', 1000)
})()