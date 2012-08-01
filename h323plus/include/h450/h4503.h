//
// h4503.h
//
// Code automatically generated by asnparse.
//

#if ! H323_DISABLE_H4503

#ifndef __H4503_H
#define __H4503_H

#ifdef P_USE_PRAGMA
#pragma interface
#endif

#include <ptclib/asner.h>

#include "h4501.h"
#include "h225.h"
#include "h225.h"
#include "h4501.h"
#include "h4501.h"


//
// H323CallDiversionOperations
//

class H4503_H323CallDiversionOperations : public PASN_Enumeration
{
#ifndef PASN_LEANANDMEAN
    PCLASSINFO(H4503_H323CallDiversionOperations, PASN_Enumeration);
#endif
  public:
    H4503_H323CallDiversionOperations(unsigned tag = UniversalEnumeration, TagClass tagClass = UniversalTagClass);

    enum Enumerations {
      e_activateDiversionQ = 15,
      e_deactivateDiversionQ,
      e_interrogateDiversionQ,
      e_checkRestriction,
      e_callRerouting,
      e_divertingLegInformation1,
      e_divertingLegInformation2,
      e_divertingLegInformation3,
      e_divertingLegInformation4 = 100,
      e_cfnrDivertedLegFailed = 23
    };

    H4503_H323CallDiversionOperations & operator=(unsigned v);
    PObject * Clone() const;
};


//
// DiversionReason
//

class H4503_DiversionReason : public PASN_Enumeration
{
#ifndef PASN_LEANANDMEAN
    PCLASSINFO(H4503_DiversionReason, PASN_Enumeration);
#endif
  public:
    H4503_DiversionReason(unsigned tag = UniversalEnumeration, TagClass tagClass = UniversalTagClass);

    enum Enumerations {
      e_unknown,
      e_cfu,
      e_cfb,
      e_cfnr
    };

    H4503_DiversionReason & operator=(unsigned v);
    PObject * Clone() const;
};


//
// IntResultList
//

class H4503_IntResult;

class H4503_IntResultList : public PASN_Array
{
#ifndef PASN_LEANANDMEAN
    PCLASSINFO(H4503_IntResultList, PASN_Array);
#endif
  public:
    H4503_IntResultList(unsigned tag = UniversalSet, TagClass tagClass = UniversalTagClass);

    PASN_Object * CreateObject() const;
    H4503_IntResult & operator[](PINDEX i) const;
    PObject * Clone() const;
};


//
// Procedure
//

class H4503_Procedure : public PASN_Enumeration
{
#ifndef PASN_LEANANDMEAN
    PCLASSINFO(H4503_Procedure, PASN_Enumeration);
#endif
  public:
    H4503_Procedure(unsigned tag = UniversalEnumeration, TagClass tagClass = UniversalTagClass);

    enum Enumerations {
      e_cfu,
      e_cfb,
      e_cfnr
    };

    H4503_Procedure & operator=(unsigned v);
    PObject * Clone() const;
};


//
// SubscriptionOption
//

class H4503_SubscriptionOption : public PASN_Enumeration
{
#ifndef PASN_LEANANDMEAN
    PCLASSINFO(H4503_SubscriptionOption, PASN_Enumeration);
#endif
  public:
    H4503_SubscriptionOption(unsigned tag = UniversalEnumeration, TagClass tagClass = UniversalTagClass);

    enum Enumerations {
      e_noNotification,
      e_notificationWithoutDivertedToNr,
      e_notificationWithDivertedToNr
    };

    H4503_SubscriptionOption & operator=(unsigned v);
    PObject * Clone() const;
};


//
// CallDiversionErrors
//

class H4503_CallDiversionErrors : public PASN_Enumeration
{
#ifndef PASN_LEANANDMEAN
    PCLASSINFO(H4503_CallDiversionErrors, PASN_Enumeration);
#endif
  public:
    H4503_CallDiversionErrors(unsigned tag = UniversalEnumeration, TagClass tagClass = UniversalTagClass);

    enum Enumerations {
      e_invalidDivertedNumber = 12,
      e_specialServiceNumber = 14,
      e_diversionToServedUserNumber,
      e_numberOfDiversionsExceeded = 24,
      e_temporarilyUnavailable = 1000,
      e_notAuthorized = 1007,
      e_unspecified
    };

    H4503_CallDiversionErrors & operator=(unsigned v);
    PObject * Clone() const;
};


//
// BasicService
//

class H4503_BasicService : public PASN_Enumeration
{
#ifndef PASN_LEANANDMEAN
    PCLASSINFO(H4503_BasicService, PASN_Enumeration);
#endif
  public:
    H4503_BasicService(unsigned tag = UniversalEnumeration, TagClass tagClass = UniversalTagClass);

    enum Enumerations {
      e_allServices
    };

    H4503_BasicService & operator=(unsigned v);
    PObject * Clone() const;
};


//
// ExtensionSeq
//

class H4501_Extension;

class H4503_ExtensionSeq : public PASN_Array
{
#ifndef PASN_LEANANDMEAN
    PCLASSINFO(H4503_ExtensionSeq, PASN_Array);
#endif
  public:
    H4503_ExtensionSeq(unsigned tag = UniversalSequence, TagClass tagClass = UniversalTagClass);

    PASN_Object * CreateObject() const;
    H4501_Extension & operator[](PINDEX i) const;
    PObject * Clone() const;
};


//
// IntResult_extension
//

class H4503_ExtensionSeq;
class H225_NonStandardParameter;

class H4503_IntResult_extension : public PASN_Choice
{
#ifndef PASN_LEANANDMEAN
    PCLASSINFO(H4503_IntResult_extension, PASN_Choice);
#endif
  public:
    H4503_IntResult_extension(unsigned tag = 0, TagClass tagClass = UniversalTagClass);

    enum Choices {
      e_extensionSeq,
      e_nonStandardData
    };

#if defined(__GNUC__) && __GNUC__ <= 2 && __GNUC_MINOR__ < 9
    operator H4503_ExtensionSeq &() const;
#else
    operator H4503_ExtensionSeq &();
    operator const H4503_ExtensionSeq &() const;
#endif
#if defined(__GNUC__) && __GNUC__ <= 2 && __GNUC_MINOR__ < 9
    operator H225_NonStandardParameter &() const;
#else
    operator H225_NonStandardParameter &();
    operator const H225_NonStandardParameter &() const;
#endif

    BOOL CreateObject();
    PObject * Clone() const;
};


//
// DivertingLegInfo2Arg_extension
//

class H4503_ExtensionSeq;
class H225_NonStandardParameter;

class H4503_DivertingLegInfo2Arg_extension : public PASN_Choice
{
#ifndef PASN_LEANANDMEAN
    PCLASSINFO(H4503_DivertingLegInfo2Arg_extension, PASN_Choice);
#endif
  public:
    H4503_DivertingLegInfo2Arg_extension(unsigned tag = 0, TagClass tagClass = UniversalTagClass);

    enum Choices {
      e_extensionSeq,
      e_nonStandardData
    };

#if defined(__GNUC__) && __GNUC__ <= 2 && __GNUC_MINOR__ < 9
    operator H4503_ExtensionSeq &() const;
#else
    operator H4503_ExtensionSeq &();
    operator const H4503_ExtensionSeq &() const;
#endif
#if defined(__GNUC__) && __GNUC__ <= 2 && __GNUC_MINOR__ < 9
    operator H225_NonStandardParameter &() const;
#else
    operator H225_NonStandardParameter &();
    operator const H225_NonStandardParameter &() const;
#endif

    BOOL CreateObject();
    PObject * Clone() const;
};


//
// IntResult
//

class H4503_IntResult : public PASN_Sequence
{
#ifndef PASN_LEANANDMEAN
    PCLASSINFO(H4503_IntResult, PASN_Sequence);
#endif
  public:
    H4503_IntResult(unsigned tag = UniversalSequence, TagClass tagClass = UniversalTagClass);

    enum OptionalFields {
      e_extension
    };

    H4501_EndpointAddress m_servedUserNr;
    H4503_BasicService m_basicService;
    H4503_Procedure m_procedure;
    H4501_EndpointAddress m_divertedToAddress;
    PASN_Boolean m_remoteEnabled;
    H4503_IntResult_extension m_extension;

    PINDEX GetDataLength() const;
    BOOL Decode(PASN_Stream & strm);
    void Encode(PASN_Stream & strm) const;
#ifndef PASN_NOPRINTON
    void PrintOn(ostream & strm) const;
#endif
    Comparison Compare(const PObject & obj) const;
    PObject * Clone() const;
};


//
// DivertingLegInfo2Arg
//

class H4503_DivertingLegInfo2Arg : public PASN_Sequence
{
#ifndef PASN_LEANANDMEAN
    PCLASSINFO(H4503_DivertingLegInfo2Arg, PASN_Sequence);
#endif
  public:
    H4503_DivertingLegInfo2Arg(unsigned tag = UniversalSequence, TagClass tagClass = UniversalTagClass);

    enum OptionalFields {
      e_originalDiversionReason,
      e_divertingNr,
      e_originalCalledNr,
      e_redirectingInfo,
      e_originalCalledInfo,
      e_extension
    };

    PASN_Integer m_diversionCounter;
    H4503_DiversionReason m_diversionReason;
    H4503_DiversionReason m_originalDiversionReason;
    H4501_EndpointAddress m_divertingNr;
    H4501_EndpointAddress m_originalCalledNr;
    PASN_BMPString m_redirectingInfo;
    PASN_BMPString m_originalCalledInfo;
    H4503_DivertingLegInfo2Arg_extension m_extension;

    PINDEX GetDataLength() const;
    BOOL Decode(PASN_Stream & strm);
    void Encode(PASN_Stream & strm) const;
#ifndef PASN_NOPRINTON
    void PrintOn(ostream & strm) const;
#endif
    Comparison Compare(const PObject & obj) const;
    PObject * Clone() const;
};


#endif // __H4503_H

#endif // if ! H323_DISABLE_H4503


// End of h4503.h
